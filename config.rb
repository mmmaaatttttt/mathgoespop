require 'dotenv/load'
require_relative 'renderer'

###
# Blog settings
###

# Time.zone = "UTC"

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  blog.permalink = "{year}/{month}/{title.lowercase}.html"
  # Matcher for blog source files
  blog.sources = "posts/{year}-{month}-{day}-{title.lowercase}.html"
  # blog.taglink = "tags/{tag}.html"
  # blog.layout = "layout"
  # blog.summary_separator = /(READMORE)/
  blog.summary_length = 500
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", layout: false
#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Code Syntax Highlighting

set(
  :markdown, 
  renderer: MGPRenderer, 
  fenced_code_blocks: true, 
  smartypants: true, 
  with_toc_data: true
)
set :markdown_engine, :redcarpet

activate :syntax

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Development-specific configuration
configure :development do
  activate :disqus do |d|
    d.shortname = "mathgoespop-dev"
  end
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets
  # ignore "/stylesheets/code.css.erb"
  # Or use a different image path
  # set :http_prefix, "/Content/images/"
  activate :disqus do |d|
    d.shortname = "mathgoespop"
  end
end

# search 
activate :search do |search|
  search.resources = ['posts']
  search.fields = {
    title:   {boost: 100},
    content: {boost: 50},
  }
  search.before_index = Proc.new do |to_index, to_store, resource|
    to_store[:title] = resource.data.title
    to_store[:href] = resource.request_path
    to_store[:date] = resource.data.date
  end
end

# configure deploy options
activate :deploy do |deploy|
  deploy.method          = :ftp
  deploy.host            = ENV['FTP_HOST']
  deploy.path            = ENV['FTP_PATH']
  deploy.user            = ENV['FTP_USER']
  deploy.password        = ENV['FTP_PASSWORD']
  deploy.build_before    = true
end
