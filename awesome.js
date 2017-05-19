class Post {
	constructor(title,link,author,img,body){
		this.title = title;
		this.link = link;
		this.author = author;
		this.img = img;
		this.body = body;
	}
}

const app = new Vue({

	el: '#root',

	data: {

		keyword: '',

		postlist: [
		
		new Post(
				'I just feel like I know you Rick...',
				'https://google.com',
				'Kyle Poch',
				'https://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley.jpg',
				'All my life I\'ve just felt so close to you, Rick, like I understand you on a deeper level. We should meet up'
				),
		new Post(
				'I\'ve always felt the same way',
				'https://google.com',
				'Byle Koch',
				'https://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley.jpg',
				'I don\'t understand, I\'ve always felt the same way. This is weird, we are all so similar'
				),
		new Post(
				'I\'ve been searching for a long time',
				'https://google.com',
				'Marley\'s brother',
				'https://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley.jpg',
				'I think I\'ve found the answer. You have to believe me, they are cloning us to take over the world'
				),
		new Post(
				'I\'ve been searching for a long time',
				'https://google.com',
				'Marley\'s brother',
				'https://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley.jpg',
				'I think I\'ve found the answer. You have to believe me, they are cloning us to take over the world'
				),

			
		]
	},
	computed: {
		filterlist(){
			return this.postlist.filter((post)=>{
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
