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
				'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				'Kyle Poch',
				'https://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley.jpg',
				'All my life I\'ve just felt so close to you, Rick, like I understand you on a deeper level. We should meet up'
				),
		new Post(
				'I\'ve always felt the same way',
				'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				'Carrot Top',
				'https://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley.jpg',
				'I don\'t understand, I\'ve always felt the same way. This is weird, we are all so similar'
				),
		new Post(
				'I\'ve found it',
				'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				'Marley\'s brother',
				'https://upload.wikimedia.org/wikipedia/commons/3/38/Tucker_Albrizzi.jpg',
				'They are cloning us. We are created by the UK to take over the world.'
				),
		new Post(
				'This needs to stop',
				'https://www.youtube.com/watch?v=2gfRtgMWUgs',
				'Angry Ginger Kid',
				'https://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley.jpg',
				'People like this (https://www.youtube.com/watch?v=2gfRtgMWUgs) are horrible for us. If we are clones we need to come together and stand up for ourselves!'
				),
		new Post(
				'Come Together!',
				'https://www.youtube.com/watch?v=GM12Sda56jE',
				'Ginger Jesus',
				'https://pics.onsizzle.com/jesus-was-a-ginger-thats-why-he-was-crucified-7405963.png',
				'We need to take action! (https://www.youtube.com/watch?v=2gfRtgMWUgs)'
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
