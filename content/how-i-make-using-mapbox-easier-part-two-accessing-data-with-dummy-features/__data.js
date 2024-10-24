window.__sveltekit_data = (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {type:l,nodes:[m,m,{type:l,data:{authors:[{metadata:{tags:[],concepts:[]},sys:{space:{sys:{type:a,linkType:b,id:c}},id:"6rhv4yMoAF3cN8jyYqZSWu",type:h,createdAt:"2022-06-17T16:18:02.488Z",updatedAt:"2022-06-25T01:07:29.101Z",environment:{sys:{id:d,type:a,linkType:e}},publishedVersion:6,revision:i,contentType:{sys:{type:a,linkType:j,id:"author"}},locale:f},fields:{fullName:"John Osterman",website:"https:\u002F\u002Fosterman.io\u002F",twitterAccount:"https:\u002F\u002Ftwitter.com\u002FJohnAOsterman",linkedinAccount:"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fjohn-osterman-32714012\u002F",photo:{metadata:{tags:[],concepts:[]},sys:{space:{sys:{type:a,linkType:b,id:c}},id:"6E2Gh0TS2hrqafgOY1NlHr",type:n,createdAt:o,updatedAt:o,environment:{sys:{id:d,type:a,linkType:e}},publishedVersion:p,revision:g,locale:f},fields:{title:"john osterman photo",description:q,file:{url:"\u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F6E2Gh0TS2hrqafgOY1NlHr\u002F68804563485dfdb3f0cb50fb38e3e3fa\u002Fosterman-photo.jpg",details:{size:256400,image:{width:750,height:847}},fileName:"osterman-photo.jpg",contentType:"image\u002Fjpeg"}}}}}],title:"How I make using Mapbox easier, part two: accessing data with dummy features",datePublished:"2021-01-03",body:"\u003Cp\u003E\u003Cspan class=\"first-letter\"\u003EA\u003C\u002Fspan\u003Es I’ve \u003Ca href=\"\u002Fcontent\u002Fhow-i-make-using-mapbox-easier-part-one-async-adding-sources-and-layers\u002F\"\u003Esaid before\u003C\u002Fa\u003E, I really like using Mapbox for visualizing geographic data, but it does have a few things I stumble over again and again. One of those things is trying to access the entirety of a dataset that’s behind map features that have not fully rendered. I’ll explain what I mean about that in a moment; one of the solutions I’ve found, to cut to the chase, is to preprocess the data I need and attach it to a dummy feature that I know will render when the map loads.\u003C\u002Fp\u003E\n\u003Cpicture\u003E\n        \u003Csource srcset=\"\u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=avif&w=1480&h=1045&q=30 2x, \u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=avif&w=740&h=523&q=30 1x\" type=\"image\u002Favif\" media=\"(min-width:632px)\"\u003E\n                          \u003Csource srcset=\"\u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=avif&w=800&h=565&q=30 2x, \u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=avif&w=400&h=282&q=30 1x\" type=\"image\u002Favif\"\u003E\u003Csource srcset=\"\u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=webp&w=1480&h=1045&q=30 2x, \u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=webp&w=740&h=523&q=30 1x\" type=\"image\u002Fwebp\" media=\"(min-width:632px)\"\u003E\n                          \u003Csource srcset=\"\u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=webp&w=800&h=565&q=30 2x, \u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png?fm=webp&w=400&h=282&q=30 1x\" type=\"image\u002Fwebp\"\u003E\n        \u003Cimg load=\"lazy\" class=\"full\" src=\"\u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png\" width=\"1014px\" height=\"716px\" alt=\"\" \u002F\u003E\n    \u003C\u002Fpicture\u003E\n\u003Ch2\u003ESome explanation\u003C\u002Fh2\u003E\n\u003Cp\u003EThere are basically two ways to supply the data you are visualizing to Mapbox: 1) you can do it when your code is executed by supplying the Map instance’s \u003Ccode\u003EaddSource()\u003C\u002Fcode\u003E method with geoJSON data, whether literally (i.e., passing the geoJSON object directly), by reference, or by supplying a url to it or 2) you can supply the data beforehand, behind the scenes, by uploading data to Mapbox Studio or using its tiling service. When you supply the data beforehand, Mapbox converts it into a tileset, a collection of data ready to be loaded into a map at a range of zoom levels. When you \u003Ccode\u003EaddSource()\u003C\u002Fcode\u003E to the map, you point instead to the ready-made tileset. (You can also upload the data to Mapbox Studio as a dataset, which you can later convert to tilesets.)\u003C\u002Fp\u003E\n\u003Cp\u003EI prefer to upload or tile-service the data beforehand rather than handle potentially very large geoJSON objects client-side and expend the resources and milliseconds (or seconds) needed to convert that data into tiles on every page load, every time someone visits the page. If the data is static, why task each client with performing those operations over and over again?\u003C\u002Fp\u003E\n\u003Ch2\u003EThe problem\u003C\u002Fh2\u003E\n\u003Cp\u003EIf you’re only rendering features on a map and only displaying or inspecting or otherwise making use of the data properties of those features after they are rendered—for example, by clicking or hovering over locations—the above method of not handling the data client-side will be fine. But if you would like to also display data beyond the context of the map, such as summary stats or graphs in a sidebar, you will likely find that you don’t have access to all the data points in the tileset because not all of the features have been rendered. Features may be outside the current bounds of the map, or they may be too densely packed to show at your current zoom level. So if you wanted to, for example, display a bar chart showing the number of the various kinds of, say, donut shops in your city, you would not reliably be able to get the full dataset using the \u003Ca href=\"https:\u002F\u002Fdocs.mapbox.com\u002Fmapbox-gl-js\u002Fapi\u002Fmap\u002F#map#queryrenderedfeatures\"\u003E\u003Ccode\u003EqueryRenderedFeatures()\u003C\u002Fcode\u003E\u003C\u002Fa\u003E method.\u003C\u002Fp\u003E\n\u003Ch2\u003EOne harder solution\u003C\u002Fh2\u003E\n\u003Cp\u003EThere is a viable way to use the \u003Ca href=\"https:\u002F\u002Fdocs.mapbox.com\u002Fmapbox-gl-js\u002Fapi\u002Fmap\u002F#map#queryrenderedfeatures\"\u003E\u003Ccode\u003EquerySourceFeatures()\u003C\u002Fcode\u003E\u003C\u002Fa\u003E method, which returns source data regardless of whether it has been rendered, but you have to manage two difficulties: data behind tiles outside the bounds of your current map viewport will not be returned and the same data may be returned more than once if the feature it’s attached to spans multiple tiles.\u003C\u002Fp\u003E\n\u003Cp\u003EI’ve managed that solution for a project \u003Ca href=\"\u002Fcontent\u002Fmapping-data-from-the-national-flood-insurance-program\u002F\"\u003Emapping flood insurance programs\u003C\u002Fa\u003E where the sidebar graphs were meant to update to always include only data for features within the current maps bounds. If your graphs don’t need to adjust according to the map bounds, there are easier ways.\u003C\u002Fp\u003E\n\u003Ch2\u003EEasier solutions\u003C\u002Fh2\u003E\n\u003Cp\u003EOne solution is to provide the full dataset to Mapbox for rendering features on the map and keep the same dataset client-side for other purposes. That doesn’t sit well—you’ve got two sources of truth and are using up system resources unnecessarily. Another option is to keep only a preprocessed summary of the data client-side. That’s fine; I’ve done it this way and probably will again. The heavy work of manipulating the data is done once during a build or prebuild step, so at least you’re sparing the client from doing the same, repetitive data manipulation over and over again. That still gives you two sources of truth, though, and a somewhat more complex thing to maintain or update.\u003C\u002Fp\u003E\n\u003Cp\u003ETo keep all the data—the summary and its source—together, you can attach the summary data to a dummy feature in the tileset. A tileset of polygons scattered throughout a geographical area, for instance, could have a dummy polygon, the size of your map bounds, with the summary data attached to it as the feature’s properties. Adjust its opacity to zero using a data-driven expression and there you have it. Whenever you have to update the data, you have it all in one source.\u003C\u002Fp\u003E\n\u003Cp\u003EIf your tileset is of points, you’ll have to put the summary data in its own polygon tileset so that it can cover an area large enough to ensure that it is rendered on map load. That’s not as clean but at least with everything coming as a tileset you won’t be juggling multiple ways of serving up the data. Grab it with \u003Ccode\u003EqueryRenderedFeatures()\u003C\u002Fcode\u003E, and you’re good to go.\u003C\u002Fp\u003E\n\u003Cp\u003EThanks as always for reading. If I’ve missed something or got it wrong, please let me know.\u003C\u002Fp\u003E\n",snippet:"Accessing the entire dataset behind a Mapbox layer is hard; attach data to a dummy feature and use that instead.",tags:[{metadata:{tags:[],concepts:[]},sys:{space:{sys:{type:a,linkType:b,id:c}},id:"3AIjGHsEBIU2L5LSAhDYZG",type:h,createdAt:r,updatedAt:r,environment:{sys:{id:d,type:a,linkType:e}},publishedVersion:i,revision:g,contentType:{sys:{type:a,linkType:j,id:s}},locale:f},fields:{tag:"dataviz"}},{metadata:{tags:[],concepts:[]},sys:{space:{sys:{type:a,linkType:b,id:c}},id:"5tPE4sus2igTIK2zIdqyBz",type:h,createdAt:t,updatedAt:t,environment:{sys:{id:d,type:a,linkType:e}},publishedVersion:i,revision:g,contentType:{sys:{type:a,linkType:j,id:s}},locale:f},fields:{tag:"mapbox"}}],heroImage:{metadata:{tags:[],concepts:[]},sys:{space:{sys:{type:a,linkType:b,id:c}},id:"7BVY3VwnWJTM90HvIZbgqG",type:n,createdAt:u,updatedAt:u,environment:{sys:{id:d,type:a,linkType:e}},publishedVersion:p,revision:g,locale:f},fields:{title:"mapbox dummy area",description:q,file:{url:"\u002F\u002Fimages.ctfassets.net\u002F3qr5d6sj491p\u002F7BVY3VwnWJTM90HvIZbgqG\u002Fcbf88c45ce1baae670b4133954c2212c\u002Fmapbox-dummy-feature.png",details:{size:225524,image:{width:1014,height:716}},fileName:"mapbox-dummy-feature.png",contentType:"image\u002Fpng"}}},contentType:"blogPost"},uses:{dependencies:k,params:["slug"],parent:k,url:k}}]}}("Link","Space","3qr5d6sj491p","master","Environment","en-US",1,"Entry",2,"ContentType",void 0,"data",null,"Asset","2022-06-25T01:06:08.949Z",5,"","2022-07-25T18:21:18.957Z","tag","2022-08-14T20:57:53.919Z","2022-08-14T20:59:17.771Z"))