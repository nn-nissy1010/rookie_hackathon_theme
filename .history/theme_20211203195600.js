images = [`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_1" class="set_img">`,
        `<img src="https://www.rbbtoday.com/imgs/p/RqJIzsl7cmxG8-cARbeaqilNLEDQQ0JFREdG/510534.jpg" alt="" id="set_img_2" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_3" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_4" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_5" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_6" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_7" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_8" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_9" class="set_img">`,
        `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_10" class="set_img">`,]

        

for(let count = 1; count<11 ;count++){
    content =`<section class="set">
        <h1 class="name">${count}.西山直輝</h1>
        <div class="contents">
            ${images[count-2]}
            <div id="self_impression_${count}" class="self_impression">
                <p>自己紹介文</p>
            </div>
            <div id="my_favorite_${count}" class="my_favorite">
                <p>好きな〇〇</p>
            </div>
        </div>
        
        <div class="set_button">
            <button id="back_${count}" class="back_button" onclick="back(${count})">戻る</button>
            <button id="next_${count}" class="next_button" onclick="next(${count})">次へ</button>
        </div>
    </section>`

    document.write(content)
}

function back(count){
    img = document.getElementById(`set_img_${count}`)
    self = document.getElementById(`self_impression_${count}`)
    favorite = document.getElementById(`my_favorite_${count}`)
    if(favorite.style.display==='block'){
        img.style.display='none'
        self.style.display='block'
        favorite.style.display='none'
    }else{
        img.style.display='block'
        self.style.display='none'
        favorite.style.display='none'
    }
}

function next(count){
    img = document.getElementById(`set_img_${count}`)
    self = document.getElementById(`self_impression_${count}`)
    favorite = document.getElementById(`my_favorite_${count}`)
    if(self.style.display=='block'){
        img.style.display='none'
        self.style.display='none'
        favorite.style.display='block'
    }else if(favorite.style.display=='block'){
        ;
    }
    else{
        img.style.display='none'
        self.style.display='block'
        favorite.style.display='none'
    }
}