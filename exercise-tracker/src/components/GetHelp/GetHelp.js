import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function GetHelp() {
    return (
        <div>
            <section className="workout__container">
                <h1 className="workout__title">Work Outs</h1>
                <p className="workout__description">Hello There!!! Are you trying to get back into shape or are just starting for the first time? Well do not worry, we have listed a couple of good websites for you to read over to get the ball rolling. Once you have an idea of what kind of work out routine you want to do, you can start tracking them here at Exercise Tracker for everyone to see your progress along the way.</p>
                <ul className="workout__links">
                    <li className="workout__link"><a className="workout__a" href="https://www.bodybuilding.com/fun/workout-plans-programs" target="_blank" rel="noreferrer">BodyBulding.com</a></li>

                    <li className="workout__link"><a className="workout__a" href="https://aaptiv.com/magazine/best-strength-training-exercises-beginners" target="_blank" rel="noreferrer">aaptiv.com</a></li>

                    <li className="workout__link"><a className="workout__a" href="https://www.webmd.com/fitness-exercise/features/fitness-beginners-guide#1" target="_blank" rel="noreferrer">webmd.com</a></li>

                    <li className="workout__link"><a className="workout__a" href="https://www.nerdfitness.com/blog/beginner-body-weight-workout-burn-fat-build-muscle/" target="_blank" rel="noreferrer">nerfitness.com</a></li>
                </ul>
            </section>
            <section className="workout__container">
                <h1 className="workout__title">Nutrition</h1>
                <p className="workout__description">Another key part of working out is a good diet. Study show that a good diet leads to an increase in weight loss or weight gain depending on your goals. Where to get started you may ask yourself? Dont worry here are some good websites that can help you with your diet.</p>
                <ul className="workout__links">
                    <li className="workout__link"><a className="workout__a nutrition"href="https://www.healthline.com/nutrition/26-muscle-building-foods" target="_blank" rel="noreferrer">Healthline</a></li>
                    
                    <li className="workout__link"><a className="workout__a nutrition"href="https://www.budgetbytes.com/category/extra-bytes/budget-friendly-meal-prep/" target="_blank" rel="noreferrer">Budgetbytes</a></li>

                    <li className="workout__link"><a className="workout__a nutrition"href="https://www.trifectanutrition.com/blog/best-foods-for-weight-loss-according-to-science" target="_blank" rel="noreferrer">trifectanutrition</a></li>
                </ul>
            </section>
            <Link className="backto__home" to="/landing">Back to Home</Link>
        </div>
    )
}

export default GetHelp
