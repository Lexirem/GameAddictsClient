Game Addicts!! 

Description

This is an App for people who loves games and want to keep track of how many they have and what type.


User Stories

· 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.

· Signup: As an anon I can sign up in the platform so that I can get into my profile.

· Login: As a user I can login to the platform so that I can .

· Logout: As a user I can logout from the platform so no one else can use it.





Backlog





REACT ROUTES :
PATH			            COMPONENT		            PERMISIONS		        BEHAVIOR

/			                Home page		            Public	<Route>		    Home Page
-----------------------------------------------------------------------------------------------------------------------
/signup		                SignupPage		            anon only		        Signup Form, link to login, 
                        	                            <AnonRoute>		        navigate to home page after SignUp
-----------------------------------------------------------------------------------------------------------------------
/login			            LoginPage		            anon only		        Signup Form, link to login,
						                                <AnonRoute>		        navigate to home page after SignUp	
-----------------------------------------------------------------------------------------------------------------------
/Profile			        ProfilePage		            UserOnly		        Shows user profile, and links to edit it
						                                <Private Route>	        Link to create or edit offers
-----------------------------------------------------------------------------------------------------------------------
/Profile/:id/edit		    EditProfilePage		        UserOnly		        Edits user and boat info
						                                <Private Route>
-----------------------------------------------------------------------------------------------------------------------
/Profile/:id/createoffer	CreateOfferPage	            UserOnly		        User create own offers
						                                <PrivateRoute>
-----------------------------------------------------------------------------------------------------------------------
/offers			            Offers Page		            Public Route		    Offers main page
-----------------------------------------------------------------------------------------------------------------------
/offers/crew		        Offers Crew Page	        Public Route		    Offers main page filtered by crew
-----------------------------------------------------------------------------------------------------------------------
/offers/boats		        Offers Boat Page	        Public Route		    Offers main page filtered by boat
-----------------------------------------------------------------------------------------------------------------------
/offers/:id		            Details of the offer	    UserOnly		        Shows the detail of the offer
						                                <Private Route>	        (boat and crew)
-----------------------------------------------------------------------------------------------------------------------
/offers/:id			        Offers Page		            Public Route		    Offers main page




Components

· Navbar.

· LoginPage.



· Auth Service:

    auth.login(user)
    auth.signup(user)
    auth.logout()
    auth.me()

· User:

    user.detail(id)
    user.add(id)
    user.delete(id)




Server/Backend

Models

MODEL USER 

{
    username: String,
    password: String,
    age: String,
    gender: { type: String, enum: ["Male", "Female"] },
    email: String,
    image: String,
}

MODEL GAME:

{
name: String,
players: Number, 
type: { type: String, enum: ["Board", "VideoGame"] },
owner: {type: Schema.Types.ObjectId, ref: 'User'},
image: String
}





API Endpoints (backend routes)







Links 

Trello



Git

· Client: 

· Server: 

