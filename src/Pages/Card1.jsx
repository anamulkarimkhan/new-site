import React from 'react'

function Card1() {
  return (
    <div>
        <div class="container-fluid mt-3">
        <h1>Card 1</h1>
        <div class="container-fluid">
            <div class="row">
            <div class="col-sm bg-dark text-white p-3"><h1>2 million domain names and counting </h1></div>
            </div>  

            <div class="row">
            <div class="col-sm bg-primary text-white p-3">
            <div class="container mt-3">
                <h2>Card Image</h2>
                <img class="card-img-top" src="trusted.jpg"></img>
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Trusted</h4>
                    <p class="card-text">We have been helping Australian small businesses get online since 1997. Now over 500,000 businesses just like yours trust us with their online success.</p>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-sm bg-dark text-white p-3">
            <div class="container mt-3">
                <h2>Card Image</h2>
                <img class="card-img-top" src="trusted.jpg"></img>
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Dependable</h4>
                    <p class="card-text">We are always here for you with unlimited support via phone, email support or live support chat during business hours with our Australia based support team.</p>
                    </div>
                </div>
            </div>            
            </div>

            <div class="col-sm bg-primary text-white p-3">
            <div class="container mt-3">
                <h2>Card Image</h2>
                <img class="card-img-top" src="trusted.jpg"></img>
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Australian</h4>
                    <p class="card-text">Wecentral is part of an Australian success story, Wecentral Group, and have great teams on the ground in Sydney, Melbourne, and Brisbane.</p>
                    </div>
                </div>
            </div>            
            </div>
            </div>  

        </div>
        </div>
    </div>
  )
}

export default Card1
