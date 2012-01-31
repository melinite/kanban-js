module SomethingModule
   def path_to(page_name)
      page = ''
      if page_name == 'home'
         page = ''
      elsif page_name == 'releases'
         page = 'releases'
      elsif page_name == 'stories'
         page = 'stories'
      elsif page_name == 'board'
         page = 'board'
      end
      "/#{page}"
   end
end
