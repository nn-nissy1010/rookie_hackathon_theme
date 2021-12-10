

function back(){
    img = document.getElementById('set_img_1')
    self = document.getElementById('self_impression_1')
    favorite = document.getElementById('my_favorite_1')
    if(favorite.style.display==='block'){
        img.style.display=
    }
    img.style.display='block'
    self.style.display='none'
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