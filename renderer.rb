require "middleman-core/renderers/redcarpet"

class MGPRenderer < Middleman::Renderers::MiddlemanRedcarpetHTML

  def link(link, title, content)
    "<a href='#{link}' target='_blank'>#{content}</a>"
  end

end