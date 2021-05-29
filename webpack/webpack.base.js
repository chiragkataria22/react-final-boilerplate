const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;
const styleExtensions = /\.(css|less|styl|scss|sass|sss)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;
const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: scriptExtensions,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        // Preprocess our own style files
        test: styleExtensions,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Preprocess 3rd party style files located in node_modules
        test: styleExtensions,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: fontsExtension,
        type: "asset",
      },
      {
        test: /\.svg/,
        type: "asset/inline",
      },
      {
        test: imageExtensions,
        type: "asset/resource",
      },
    ],
  },
};
