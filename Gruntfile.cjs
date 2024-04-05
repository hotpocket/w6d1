module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    ts: {
      default: {
        tsconfig: true,
      },
      options: {
        fast: "never",
      },
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ["@babel/preset-env"],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["**/*.js"],
            dest: "build",
            ext: ".js",
          },          {
            expand: true,
            cwd: "src",
            src: ["**/*.ts"],
            dest: "build",
            ext: ".ts",
          },
        ],
      },
    },

    concat: {
      js: {
        src: ["build/**/*.js"],
        dest: "dist/<%= pkg.name %>.js",
      },
      css: {
        src: ["src/**/*.css"],
        dest: "dist/<%= pkg.name %>.css",
      },
    },

    terser: {
      dist: {
        files: {
          "dist/<%= pkg.name %>.min.js": ["<%= concat.js.dest %>"],
        },
      },
    },

    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "dist",
            src: ["*.css", "!*.min.css"],
            dest: "dist",
            ext: ".min.css",
          },
        ],
      },
    },

    watch: {
      js: {
        files: ["src/**/*.js"],
        tasks: ["babel", "concat:js", "terser"],
      },
      css: {
        files: ["src/**/*.css"],
        tasks: ["concat:css", "cssmin"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-terser");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["babel", "concat", "terser", "cssmin"]);
};
