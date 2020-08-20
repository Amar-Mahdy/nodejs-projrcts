
const {Tweet} = require('../models/Tweet')

const gethomepage = (req,res) => {

    Tweet.find()
    .then(result => {
        
        res.render('index',{result})
    })
    .catch(err => console.log(err))
   
}




const postNewTweet = (req,res) => {

    if(req.method === 'GET'){
        res.render('addTweet',{err: false})
    }


    if (req.method === 'POST'){
        console.log(req.body)
        const tweet = new Tweet(req.body)
        tweet.save()
        .then(result => res.redirect('/tweets'))
        .catch(err => res.render('addTweet',{err : err.errors}))
    }
}



const showOneTweet = (req,res) => {

    Tweet.findById({_id: req.params.id})
    .then(result => {
        
        res.render('showOne',{result})
    })
    .catch(err => console.log(err))
}





const updateOneTweet = (req,res) => {

    if (req.method === 'GET') {
        Tweet.findById({_id: req.params.id})
        .then(result =>{
            res.render('editTweet',{result})
        })
        .catch(err=> console.log(err)) 
    }


    if (req.method === 'POST') {

        Tweet.findByIdAndUpdate({_id: req.params.id})
        .then(result => {
            result.title = req.body.title 
            result.tweet = req.body.tweet
            result.save()
            .then(result => {
                res.redirect('/tweets')
            })
            .catch(err => console.log(err))

        })
    }
     
}

const deleteOneTweet = (req,res) => {

    Tweet.findByIdAndDelete({_id: req.params.id})
    .then(result => {
        res.redirect('/tweets')
    })
    .catch(err => console.log(err))
    
} 






module.exports={

    gethomepage,
    postNewTweet,
    showOneTweet,
    updateOneTweet,
    deleteOneTweet

}