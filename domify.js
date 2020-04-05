let parent_ele = document.querySelector('.row');

let article_txt= 'Article 1 ';
let Img='https://source.unsplash.com/1200x720/?code';
let alt_Img = 'green grass';
let para_Txt = `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Eaque vitae repellendus, culpa quia quisquam optio iste consequuntur 
molestiae asperiores laboriosam maxime veritatis. 
Iusto exercitationem necessitatibus natus officiis ea magni sunt?`;


landing_page( article_txt, Img, alt_Img, para_Txt );
landing_page( 'Article 2 ', 'https://source.unsplash.com/640x480/?tech', 'brown rock', para_Txt );
landing_page( 'Article 3 ', 'https://source.unsplash.com/640x480/?code', 'gray asphalt', para_Txt );


function landing_page(article_text, img, alt_Image, para_Txt)
{


let div_article = document.createElement('div');
div_article.classList.add('article');


let heading = document.createElement('h2');
heading.textContent=article_text;


let Image = document.createElement('img');
Image.classList.add('article-image');
Image.src=img;
Image.alt=alt_Image;

let para = document.createElement('p');
para.textContent=para_Txt;


let para_text = document.createElement('p');
let span_t = document.createElement('span');
span_t.classList.add('text');
span_t.textContent ='Learn More';

para_text.appendChild(span_t);


div_article.insertAdjacentElement('afterbegin', heading);

div_article.insertAdjacentElement('beforeend', Image);
div_article.insertAdjacentElement('beforeend', para);
div_article.insertAdjacentElement('beforeend', para_text);



console.log(div_article);

parent_ele.insertAdjacentElement('beforebegin', div_article);

}


