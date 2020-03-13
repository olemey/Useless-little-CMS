//CONST content
const openCMS_p = document.getElementById('openCMS');
const heading_h1 = document.getElementById('content-heading');
const articles_div = document.getElementById('content-article');

//CONST cms
const cms_section = document.getElementById('cms');
const inputHeading_form = document.getElementById('cms-heading').getElementsByTagName('input');
const headingSubmit = document.getElementById('cms-heading-submit');
const cmsArticles = document.getElementById('cms-article-container');
const cmsAddArticle = document.getElementById('add-article');

let openCheck = 0;

openCMS_p.addEventListener('click', ()=>{
    if(openCheck == 0){
        cms_section.classList.remove('hide');
        openCMS_p.innerHTML = "close CMS";
        openCheck = 1;
    }else{
        cms_section.classList.add('hide');
        openCMS_p.innerHTML = "open CMS";
        openCheck = 0;
    }
});

headingSubmit.addEventListener('click', ()=>{
    let headingColor = inputHeading_form[1].value;
    heading_h1.innerHTML =
    document.title = 
    inputHeading_form[0] = 
    inputHeading_form[0].value;
    heading_h1.style.color = headingColor;
    heading_h1.style.fontSize = inputHeading_form[2].value + "px";
});

inputHeading_form[2].addEventListener('mousemove', ()=>{
    heading_h1.style.fontSize = inputHeading_form[2].value + "px";
});

inputHeading_form[0].addEventListener('keyup', ()=>{
    heading_h1.innerHTML = inputHeading_form[0].value;
});

//articles
const cmsArticleList = document.getElementById('cms-article-container').getElementsByTagName('div');

let articleCount = 0;

function addCmsArticle(count){
    cmsArticles.innerHTML += "<div><h3>Article " + (count + 1) + "</h3><input id='c-article-h"+count+" type='textarea' placeholder='article title'><br><textarea class='clearer' id='c-article-t"+count+" rows='50' cols='40' placeholder='Your article...'></textarea><p class='delete-article'>delete</p></div>";
};

function addContentArticle(count){
    articles_div.innerHTML += "<div><h2>Article " + (count + 1) + "</h2><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p></div>";
};

function articleOverwrite(){
    for(i = 0; i < articles_div.getElementsByTagName('div').length; i++){
        (function(index){
            cmsArticles.getElementsByTagName('div')[index].getElementsByTagName('input')[0].addEventListener('keyup', ()=>{
                if(cmsArticles.getElementsByTagName('div')[index].getElementsByTagName('input')[0].value !== ""){
                    articles_div.getElementsByTagName('h2')[index].innerHTML = cmsArticles.getElementsByTagName('div')[index].getElementsByTagName('input')[0].value;
                }
            })
        })(i);

        (function(index){
            cmsArticles.getElementsByTagName('div')[index].getElementsByTagName('textarea')[0].addEventListener('keyup', ()=>{
                if(cmsArticles.getElementsByTagName('div')[index].getElementsByTagName('textarea')[0].value !== ""){
                    articles_div.getElementsByTagName('p')[index].innerHTML = cmsArticles.getElementsByTagName('div')[index].getElementsByTagName('textarea')[0].value;
                }
            })
        })(i);
    }
}

cmsAddArticle.addEventListener('click', ()=>{
    addCmsArticle(articleCount);
    addContentArticle(articleCount);
    articleCount++

    //delete
    for(i = 0; i < cmsArticleList.length; i++){
        var deleteArticleList = document.getElementsByClassName('delete-article');
    }
    for(i = 0; i < deleteArticleList.length; i++){
        (function(index){
            deleteArticleList[index].addEventListener('click', ()=>{
                cmsArticleList[index].remove();
                articles_div.getElementsByTagName('div')[index].remove();
                articleCount--;
                return;
            })
        })(i);
    }

    articleOverwrite();
});





