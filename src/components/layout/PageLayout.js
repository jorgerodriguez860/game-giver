import { React, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { fillVault } from '../../actions/actionGame'
import Header from './Header'
import '../../css/PageLayout.css'

const PageLayout = ({children}) => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const getAllGames = () => {
  //     fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=uncharted&developers=naughty-dog`)
  //     .then((res) => res.json())
  //     .then((data) => dispatch(fillVault(data.results)))
  //   }

  //   getAllGames()
  // }, [])

  useEffect(() => {
    let gameData = [
      {id: '123', cover: 'pic1', name: 'game1', released: 2022, rating: 7},
      {id: '456', cover: 'pic2', name: 'game2', released: 2018, rating: 9},
      {id: '789', cover: 'pic3', name: 'game3', released: 2015, rating: 8},
      {id: '012', cover: 'pic4', name: 'game4', released: 2020, rating: 10},
      {id: '345', cover: 'pic5', name: 'game5', released: 2019, rating: 8}
    ]

    dispatch(fillVault(gameData))
  }, [])
  
  return (
    <>
      <Header />

      {children}
    </>
  )
}

export default PageLayout