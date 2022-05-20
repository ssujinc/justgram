document.querySelector(".search_cont .btn_innerSrh").addEventListener("click", function(){
    if( this.parentElement.classList.contains("off") ){
        this.parentElement.classList.remove("off");
        this.parentElement.classList.add("on");
        document.querySelector(".search_input").focus();
    } else {
        this.parentElement.classList.remove("on");
        this.parentElement.classList.add("off");
        document.getElementsByClassName("search_input")[0].value = ""; 
    }
})  

document.querySelector(".btn_closeSrh").addEventListener("click", ()=>{
    document.querySelector(".search_cont").classList.remove("on");
    document.querySelector(".search_cont").classList.add("off");
    document.getElementsByClassName("search_input")[0].value = ""; 
})

const inputComments = document.querySelectorAll(".comment_input");
inputComments.forEach((inputComment, index) => {
    inputComment.addEventListener("keypress", (event)=>{
        if( event.code === "Enter") {
            writeComment(index);
        }
    });
});

const btnAddComments = document.querySelectorAll(".btn_addComment");
btnAddComments.forEach((btnAddComment, index) => {
    btnAddComment.addEventListener("click", (e)=>{
        writeComment(index);
    });
});

function writeComment(index){
    const commentInput = document.querySelectorAll(".comment_input")[index];
    const commentDiv = createCommentDiv("sujinChoi", commentInput.value);
    const comments = document.querySelectorAll(".feeds_cnt .comments")[index];
    comments.appendChild(commentDiv);
    commentInput.value = "";
    btnAddLikeComment();
    btnDeleteComment();
}

function createCommentDiv(writer, content){
    const commentDiv = document.createElement("div");

    const commentP = document.createElement("p");
    const writerB = document.createElement("b");
    const writerText = document.createTextNode(writer);
    writerB.appendChild(writerText);

    const commentSpan = document.createElement("span");
    const commentText = document.createTextNode(content);
    commentSpan.appendChild(commentText);

    const btnCommentDelete = document.createElement("button");
    btnCommentDelete.className = "btn_commDelete";
    btnCommentDelete.innerHTML = `<i class="fas fa-times-circle"></i>`;
    const btnCommentLike = document.createElement("button");
    btnCommentLike.className = "btn_like";
    btnCommentLike.innerHTML = `<i class="fa-regular fa-heart"></i>`;

    commentP.append(writerB, " ", commentSpan);
    commentDiv.append(commentP, btnCommentDelete, btnCommentLike);

    return commentDiv;
}

function btnDeleteComment() {
    const btncommDeletes = document.querySelectorAll(".btn_commDelete");
    btncommDeletes.forEach((btncommDelete) => {
        btncommDelete.addEventListener("click", (e) => {
            e.currentTarget.parentNode.remove();
        })
    })
}

function btnAddLikeComment(){
    const btnLikes = document.querySelectorAll(".btn_like");
    btnLikes.forEach((btnLike) => {
        btnLike.addEventListener("click", (e) =>{
            if( e.currentTarget.firstElementChild.classList.contains("fa-regular") ){
                e.currentTarget.firstElementChild.classList.replace("fa-regular", "fa-solid");
            } else {
                e.currentTarget.firstElementChild.classList.replace("fa-solid", "fa-regular");
            }
            console.dir(e.currentTarget.firstElementChild.classList)
        })
    })
}

btnDeleteComment();
btnAddLikeComment();