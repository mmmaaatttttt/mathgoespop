require "middleman-core/renderers/redcarpet"

class MGPRenderer < Middleman::Renderers::MiddlemanRedcarpetHTML

  def link(link, title, content)
    "<a href='#{link}' target='_blank' rel='noopener noreferrer'>#{content}</a>"
  end

end