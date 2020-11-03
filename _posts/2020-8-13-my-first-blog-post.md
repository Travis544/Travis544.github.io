---
##adds a template to this blog pos
##date and blog is taken from the file name.
layout: "test"
title: "First Blog"
permalink: "/my-new-url/"
categories: "blog"
#or /:categories ----Categories is actually a variable
#changing the date will also change the url.
# jekyll serve --draft will build the drafts
#if draft posts doesn't have date in front, jekyll will use the current date
#two types pages--blog post, or in general, pages.  Pages can be html or markdown.
#perma links is a permant url you can assign to all pages on your site 
## url is determined by category, and date, you can add custom extensions like .html

##default front matter is a front matter we can define in yml file that will apply
##to all pages or some pages.

##to change the theme go to gem file, add another entry. Go to terminal, type bundle install. Update the theme in config yml file. 

##Different themes have different layouts. Replace front matter layout to what is required of the theme


#layouts-------------------------------------------------
#skeleton of html code that can define the look of the site. 
#a theme defines different layout for different pages.
#two themes: posts and page. 
#we can override the default layout
#post.html will override post layout ny jekyll.
#grab content------
#{{content}} serves as a placeholder for all the content on the blog post. 
#puts in the markdown or sublayouts.
#make your own custome layout

#you can define  sublayouts within layouts
#in sublayout do layout:wrapper. It will use the sublayout and the wrapper layout  
#in layouts, we can use special tags to access variable, loop through data,conditionals

#varibales-------------------------------------------------
#you can define author variable and access the variable <h3>{{layout.author}}</h3>..
#you can also access variables in the content.
#{{page.title}} --refering current page and the front matter title. 
# you can access site variables. {{site.title}} which access the title in yml file. 
#Includes-----------------------
#we can extrapolate html files and include them in our layouts.
# for example: include a header in a wrapper layout:
# {%include header.html %} ---name of file you want to include. 
#pass info to the includes.  {%include header.html color=blue%}
#in the include file, we can access the variable we passed in. 
#in include file for example: <h1 style="color: {{include.color}}"> {{site.title}}<h1> 

#loop through pages on the site. 
#{%for post in site.posts%} //for each post in all of the post in site we want to do something

#{{post.title}}

#<li><a href ="{{post.url}}">{{post.title}}</a></li> --construct a navigation list. 
#{% endfor %}

#.title is frontmatter. 

#conditionals. 
#{%if page.title=="MyFirstPost" or condtion%}
    #This is the first post
#{%elsif page.title=="MySecondPost"%}
#{%else %}
    #this is another post. 
#{%endif%}

#style="{%if page.url==post.url%}color:red;{%endif%}"
#depending on the post your on, it conditionally colors the text. 


#data files 
#json, yml and csv in data folder and we can access those data files
#see test.html

#static files
#any file that aren't getting rendered by jekyll, doesn't have front matter. 
#asses folder, image, pdg,
#{%for file in site.static_file%}
#{{file.path}}
#{%endfor%}

#tell jekyll some files are images.
#create default variable. 
#  in image folder set image front matter to true.
#defaults:
  #-scope:
 #   path: "assets/img"
 # values: true

 #in layout or post we can loop though static files and if image is true,
 # then do something to that image. 
#render image <img src="{{file.path}}"> alt="{file.name}>
---
some content