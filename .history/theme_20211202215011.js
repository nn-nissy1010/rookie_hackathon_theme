content =`<section class="set">
        <h1 class="name">1.西山直輝</h1>
        <div class="contents">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmF08qiL0RBrTwYT6mOAyXeNAOilXtIZfkw&usqp=CAU" alt="" id="set_img_1" class="set_img">
            <div id="self_impression_1" class="self_impression">
                <p>自己紹介文</p>
            </div>
            <div id="my_favorite_1" class="my_favorite">
                <p>好きな〇〇</p>
            </div>
        </div>
        
        <div class="set_button">
            <button id="back_1" class="back_button" onclick="back()">戻る</button>
            <button id="next_1" class="next_button" onclick="next()">次へ</button>
        </div>
    </section>

function back(){
    img = document.getElementById('set_img_1')
    self = document.getElementById('self_impression_1')
    favorite = document.getElementById('my_favorite_1')
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

function next(){
    img = document.getElementById('set_img_1')
    self = document.getElementById('self_impression_1')
    favorite = document.getElementById('my_favorite_1')
    if(img.style.display==='block'){
        img.style.display='none'
        self.style.display='block'
        favorite.style.display='none'
    }else{
        img.style.display='none'
        self.style.display='none'
        favorite.style.display='block'
    }
    
}