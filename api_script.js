/////////*   time and date      */

const time = new Date();
const $date =   time.getUTCFullYear()+ "-" +time.getMonth() + "-" +time.getDate()
const $timenow =time.getUTCHours()+2 +":" + String(time.getUTCMinutes()).padStart(2, "0")
const $yesterday =time.getUTCFullYear()+ "-" +time.getMonth() + "-" +(time.getDate()-1)


//////// -----------time and date ends------






const topList = document.querySelector('.top');
const apiKey = '1b2318211fa74799932c19caf20343c5'

 //// news api main page
let url =`https://newsapi.org/v2/top-headlines?country=gr&apiKey=${apiKey}`
var container = document.querySelector('.scroll_news');


	fetch(url)
		.then((res)=>{return res.json()})

		.then((data)=>{

		data.articles.forEach(article =>{

     document.querySelector(".first").innerHTML = data.articles[0].title
     const pic = document.querySelector("img.first_img");
		 if(data.articles[0].urlToImage != null){
			 pic.src =data.articles[0].urlToImage
		 }else{
			  pic.src ="assets/photos/news_paper.jpg"
		 }

     const first_article =document.querySelector("figcaption p")
           first_article.innerHTML =data.articles[0].description
					 first_article.classList.add('first_p')
     const readmore = document.createElement("a")
            readmore.setAttribute('href',data.articles[0].url)
            readmore.setAttribute('target', "_blank")
            readmore.innerText ="...read more"
						readmore.classList.add("readmore")
            first_article.appendChild(readmore)


      const   $todaysTitle = document.querySelector(".todaysTitle.one");
      const   $description_one =document.querySelector("p.description.one");
      const   $todaysTitle_pic = document.querySelector("img.todaysTitle1_pic");


              $todaysTitle.innerHTML=data.articles[1].title
              $description_one.innerHTML =data.articles[1].description
							if(data.articles[0].urlToImage !=null){
				 			 $todaysTitle_pic.src =data.articles[1].urlToImage
				 		 }else{
				 			  $todaysTitle_pic.src ="assets/photos/news_paper.jpg"
				 		 }


			const $readmore = document.createElement("a")
							$readmore.setAttribute('href',data.articles[1].url)
							$readmore.setAttribute('target', "_blank")
							$readmore.innerText ="...read more"
							$readmore.classList.add("readmore")
							$description_one.appendChild($readmore)

      const   $todaysTitle2 = document.querySelector(".todaysTitle.two");
      const   $todaysTitle_pic2 = document.querySelector(".todaysTitle2_pic");
      const   $description_two =document.querySelector("p.description.two");

              $todaysTitle2.innerHTML=data.articles[2].title
              $description_two.innerHTML =data.articles[2].description
              $todaysTitle_pic2.src =data.articles[2].urlToImage

			const $_readmore = document.createElement("a")
						$_readmore.setAttribute('href',data.articles[2].url)
						$_readmore.setAttribute('target', "_blank")
						$_readmore.innerText ="...read more"
						$_readmore.classList.add("readmore")
						$description_two.appendChild($_readmore)


		})
	}).catch((error => {
		console.log(error)
	}))

// // news api ends

// // top news starts main page
function topNews(){
	let top_url = `https://newsapi.org/v2/top-headlines?country=gr&category=general&from=$yesterday&to=$date&apiKey=${apiKey}`

	fetch(top_url)
	.then((res)=>{return res.json()})
	.then((data)=>{

	data.articles.forEach(article =>{



				let $li = document.createElement('li');
				let $title = document.createElement('a');
				let $p =document.createElement('p');
				let $img =document.createElement('img');
				let $article =document.createElement('article');
				let $span =document.createElement('span');
				let readmore=document.createElement('a');
				let span =document.createElement('span');

				readmore.classList.add("readmore")
				$img.classList.add("img_top_news")
				$span.classList.add("time_andicon")
				$article.classList.add('article-item')
				$title.classList.add("article-item_a")

				if( article.author == null){
						span.innerHTML = article.source.name
						console.log("its null article.source.name");
					}else{
						span.innerHTML =  article.author + `&nbsp &nbsp` + article.source.name;
					}

					readmore.setAttribute('href',article.url);
					readmore.setAttribute('target', "_blank");
					readmore.innerText ="...read more";
					if (article.urlToImage != null){
							$img.setAttribute('src', article.urlToImage)

							$img.setAttribute('src', article.urlToImage)
						$img.setAttribute('width', "auto")
						$img.setAttribute('height', "250")
					}else{
								$img.setAttribute('src', "assets/photos/news_paper.jpg");
								}

						$title.textContent = article.title;
						$p.textContent=article.description;
						$span.innerHTML=`<i class="fa fa-clock-o fa-lg " aria-hidden="true"></i>${$timenow}`
						$span.style.cssFloat = "left";

					$p.appendChild(readmore);
					$article.appendChild($title);
					$article.appendChild($span)
					$article.appendChild($img)
					$article.appendChild($p);
					$article.appendChild(span);
					$li.appendChild($article);
					   topList.appendChild($li);


 })

})
.catch((error) => {
	console.log(error);
});

};

topNews()


		    // ******************** BUISNESS PAGE ****

let business_url = `https:newsapi.org/v2/top-headlines?country=gr&category=business&from=$yesterday&to=$date&apiKey=${apiKey}`




const article_table =document.querySelector(".economics_bandBotm")
const top_econom = document.querySelector(".news_economics_top");
const main_econ = document.querySelector(".economics_main")


	fetch(business_url)
		.then((res)=>{return res.json()})
		.then((data)=>{


		data.articles.forEach(article =>{
			let div1 = document.createElement("div")
			let div2 = document.createElement("div")
			div1.classList.add("div1_econm")
			div2.classList.add("div2_econm")


			let _item = document.createElement('div');
			let a = document.createElement('a');
			let span = document.createElement('span');
			let span_name = document.createElement('span');
			let photo = document.createElement('img');
			let p = document.createElement('p');
			let readmore=document.createElement('a');
			a.classList.add("artcl_title");



			if( article.urlToImage != null){
				photo.setAttribute('src', article.urlToImage);
					photo.setAttribute('width', "150");
					photo.setAttribute('height', "200");
				}else{
					photo.style.display = "none";
				}
			photo.setAttribute('src', article.urlToImage);
				photo.setAttribute('width', "150");
				photo.setAttribute('height', "200");
			a.setAttribute('href',article.url);
			a.setAttribute('target', "_blank");

				readmore.classList.add("readmore")
				readmore.setAttribute('href',article.url);
				readmore.setAttribute('target', "_blank");
				readmore.innerText ="...read more"


			a.textContent = article.title;
			if( article.author == null){
					span.innerHTML = article.source.name

				}else{
					span.innerHTML =  article.author + `&nbsp &nbsp` + article.source.name;
				}



			p.innerHTML = article.description;
				p.appendChild(readmore);
				_item.appendChild(a);
				_item.appendChild(photo);
				_item.appendChild(p);
				_item.appendChild(span);
					_item.appendChild(span_name);


    if (data.articles.indexOf(article)% 2 == 0 ){
			div2.appendChild(_item);
			article_table.appendChild(div2)

		}else{
				div1.appendChild(_item);
			top_econom.appendChild(div1)
		}

		})



	}).catch((error) => {
		console.log(error);
	});


// // -----   ***** ============= HEALTH PAGE *****

let health_url =` https:newsapi.org/v2/top-headlines?country=gr&category=health&apiKey=${apiKey}`

let healt_block = document.querySelector(".news_health_top");

fetch(health_url)
	.then((res)=>{return res.json()})
		.then((data)=>{
			data.articles.forEach(article => {

			let $figure = document.createElement("figure");
			let $img = document.createElement("img");
			let $figcaption = document.createElement('figcaption');
			let span = document.createElement('span');
				let readmore=document.createElement('a');
			let a = document.createElement('a');
				a.classList.add("title")


				if( article.urlToImage != null){
					console.log("this img isnot null")
					$img.setAttribute('src', article.urlToImage);
						$img.setAttribute('width', "150");
						$img.setAttribute('height', "200");
					}else{
						$imgphoto.setAttribute('src',"./assets/photos/news_paper.jpg");
					}

							a.setAttribute('href',article.url);
							a.setAttribute('target', "_blank");


						readmore.classList.add("readmore")
						readmore.setAttribute('href',article.url);
						readmore.setAttribute('target', "_blank");
						readmore.innerText ="...read more"


						a.textContent = article.title;
						span.textContent = article.author;
						$figcaption.innerHTML = article.description;

						$figure.appendChild(a);
						$figure.appendChild($img);
						$figure.appendChild($figcaption);
						$figure.appendChild(span);
						healt_block.appendChild($figure);



			})
		}).catch((error) => {
			console.log(error);
		});


	//////////					*****SCIENCE_PAGE****

					 let science_url =`https:newsapi.org/v2/top-headlines?country=gr&category=science&apiKey=${apiKey}`;
					 let science_block = document.querySelector(".news_science_top");

					 fetch(science_url)
					 	.then((res) => {
							return res.json()})
					 	.then((data) => {
					 			data.articles.forEach(article => {

					 			let $figure = document.createElement("figure");
					 			let $img = document.createElement("img");
					 			let $figcaption = document.createElement('figcaption');
					 			let span = document.createElement('span');
					 			let a = document.createElement('a');
					 				a.classList.add("title")
									let readmore=document.createElement('a');



									if( article.urlToImage != null){
										$img.setAttribute('src', article.urlToImage);
											$img.setAttribute('width', "150");
											$img.setAttribute('height', "200");
										}else{
											$img.setAttribute('src',"./assets/photos/news_paper.jpg");

										}

					 							a.setAttribute('href',article.url);
					 							a.setAttribute('target', "_blank");

					 						readmore.classList.add("readmore")
					 						readmore.setAttribute('href',article.url);
					 						readmore.setAttribute('target', "_blank");
					 						readmore.innerText ="...read more";

					 						a.textContent = article.title;
					 						span.textContent = article.author;
					 						$figcaption.innerHTML = article.description;
											$figcaption.appendChild(readmore);
											$figure.appendChild(a);
											$figure.appendChild($img);
											$figure.appendChild($figcaption);
											$figure.appendChild(span);

											science_block.appendChild($figure)
									})
								}).catch((error) => {
									console.log(error);
								});



/////// ======================= SPORTS PAGE ==========================



let sports_url =` https:newsapi.org/v2/top-headlines?country=gr&category=sports&apiKey=${apiKey}`
let sports_block = document.querySelector(".news_sports_top");





fetch(sports_url)
	.then((res)=>{return res.json()})
		.then((data)=>{
			data.articles.forEach(article => {

			let $figure = document.createElement("figure");
			let $img = document.createElement("img");
			let $figcaption = document.createElement('figcaption');
			let span = document.createElement('span');
				let readmore=document.createElement('a');
			let a = document.createElement('a');
				a.classList.add("title")


				if( article.urlToImage != null){
						$img.setAttribute('src', article.urlToImage);
						$img.setAttribute('width', "150");
						$img.setAttribute('height', "200");
					}else{
						$img.setAttribute('src',"./assets/photos/news_paper.jpg");

					}

							a.setAttribute('href',article.url);
							a.setAttribute('target', "_blank");


						readmore.classList.add("readmore")
						readmore.setAttribute('href',article.url);
						readmore.setAttribute('target', "_blank");
						readmore.innerText ="...read more"


						a.textContent = article.title;
						span.textContent = article.author;
						$figcaption.innerHTML = article.description;


						$figure.appendChild(a);
						$figure.appendChild($img);
						$figure.appendChild($figcaption);
						$figure.appendChild(span);
						sports_block.appendChild($figure);



			})
		}).catch((error) => {
			console.log(error);
		});
