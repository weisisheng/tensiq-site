/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const webpack = require('webpack')

const fs = require('fs')
const zlib = require('zlib')
const glob = require('glob') // https://www.npmjs.com/package/glob
const path = require('path')
const Font = require('fonteditor-core').Font

const generateBabelConfig = require('gatsby/dist/utils/babel-config')
const modulesToCompile = [
  'react-native-*',
  'rehype-react'
]

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      'react-native-web',
      'transform-decorators-legacy',
      'transform-class-properties',
    ]),
  }
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions', 'IE >= 9'],
  }
  // if (stage === 'build-javascript') {
  //   config._config.devtool = 'source-map';
  // }
  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader('js').loader('js', {
      test: /\.jsx?$/,
      exclude: modulePath => {
        const doExclude =
          /node_modules/.test(modulePath) &&
          !RegExp('(' + modulesToCompile.join('|') + ')').test(modulePath)
        return doExclude
      },
      loader: 'babel-loader',
      query: babelConfig,
    })
    config.merge({
      resolve: {
        alias: {
          'react-native-svg': 'react-native-svg-web',
          'victory-native': 'victory',
        },
        extensions: ['', '.web.js', '.js', '.jsx', '.json'],
      },
    })
    config.plugin('font-json', webpack.NormalModuleReplacementPlugin, [
      /react-native-vector-icons\/glyphmaps\/FontAwesome.json/,
      `${__dirname}/src/fonts/FontAwesome.json`,
    ])
    // config.plugin('context-replace-hljs', webpack.ContextReplacementPlugin, [
    //   /highlight\.js\/lib\/languages$/,
    //   new RegExp(`^./(${['javascript'].join('|')})$`),
    // ]);
  })
}

exports.onPostBuild = (args, pluginOptions) =>
  new Promise(resolve => {
    const publicPath = path.join(__dirname, 'public')
    const gzippable = glob.sync(`${publicPath}/**/?(*.html|*.js|*.css)`)
    gzippable.forEach(file => {
      const content = fs.readFileSync(file)
      const zipped = zlib.gzipSync(content)
      fs.writeFileSync(`${file}.gz`, zipped)
    })
    const usedGlyphs = JSON.parse(
      fs.readFileSync(`${__dirname}/src/fonts/FontAwesome.json`)
    )
    const fontAwesomeFontfiles = glob.sync(`${publicPath}/static/FontAwesome*.ttf`)
    fontAwesomeFontfiles.forEach(file => {
      var content = fs.readFileSync(file)
      const font = Font.create(content, {
        type: 'ttf',
        subset: Object.values(usedGlyphs),
        hinting: true,
      })
      font.optimize()
      content = font.write({
        type: 'ttf',
        hinting: true,
      })
      fs.writeFileSync(file, content)
    })
    resolve()
  })

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}