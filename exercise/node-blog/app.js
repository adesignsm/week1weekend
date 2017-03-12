// require and instantiate express
const app = require("express")()

//fake posts to simulate a database
const posts = [
	
	{
		id : 1,
		author: "Akash",
		title: "Templating with EJS",
		body: "Blog post number 1"
	},

	{
		id: 2,
		author: "Jihye",
		title: "Express: Starting from the Bototm",
		body: "Blog post number 2"
	},

	{
		id: 3,
		author: "Me",
		title: "Express: Now we Here",
		body: "Blog post number 3"
	}
]

//set tje view engine to ejs
app.set("view engine", "ejs")

//blog home page 
app.get("/", (reg, res) => {
	//render 'home.ejs' with the list of posts
	res.render("home", { posts: posts })
})

//blog post
app.get("/post/:id", (reg, res) => {

	//find the post in the 'posts' array
	const post = posts.filter((post) => {
		return post.id == reg.params.id
		
	})[0]

	//render the 'post.ejs' template with the the post content
	res.render("post", {

		author: post.author,
		title: post.title,
		body: post.body
	})
})

app.listen(8080)

console.log("listening on port 8080");