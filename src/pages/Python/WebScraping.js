import React from 'react'
import { Card } from 'react-bootstrap'
import * as SiIcons from 'react-icons/si'
import './pages.css'

export const WebScraping = () => {
    return (
        <div className='webscrape'>
            <Card className='card'>

                <Card.Header><h1 className='black'>Web-Scraping HTML <SiIcons.SiPython /></h1></Card.Header>

                <Card.Body>
                    <Card.Text className='smtexty'>
                        <span className='bold'>from bs4 import BeautifulSoup</span> <br></br>
                        <span className='bold'>import requests</span> <br></br>
                        <span className='bold'>import lxml</span> <br></br>
                        <br></br>
                        <span className='bold'>base_url = "https://en.wikipedia.org/wiki/</span> <br></br>
                        <span className='bold tab5'>Black_players_in_ice_hockey"</span> <br></br>
                        <br></br>
                        <span className='notes'>#Send get http request</span> <br></br>
                        <span className='bold'>page = requests.get(base_url)</span> <br></br>
                        <br></br>
                        <span className='bold'>print(page.status_code)</span> <br></br>
                        <br></br>
                        <span className='notes'># Verify we had a successful get request</span> <br></br>
                        <span className='bold'>if page.status_code == requests.codes.ok:</span> <br></br>
                        <br></br>
                        <span className='notes'># Get the whole webpage in beautiful soup format</span> <br></br>
                        <span className='bold'>bs = BeautifulSoup(page.text, 'lxml')</span> <br></br>
                        <br></br>
                        <span className='notes'>#prints out the whole html page text</span> <br></br>
                        <span className='notes'>#print(page.text)</span> <br></br>
                        <br></br>
                        <span className='notes'>#Find something you specify in HTML</span> <br></br>
                        <span className='bold'>black_hockey_players = bs.find('table', class_='multicol').find('td').find_all('tr')</span> <br></br>
                        <span className='notes'>#print(type(list(black_hockey_players)))</span> <br></br>
                        <br></br>
                        <span className='notes'>#Use Python Indexing to slice thru the list</span> <br></br>
                        <span className='notes'>#print(black_hockey_players[-10:])</span> <br></br>
                        <br></br>
                        <span className='bold'>last_ten_players = black_hockey_players[-10:]</span> <br></br>
                        <br></br>
                        <span className='bold'>#print(last_ten_players)</span> <br></br>
                        <span className='bold'>#Will hold our data</span> <br></br>
                        <br></br>
                        <span className='bold'>data = {'{'}</span> <br></br>
                        <span className='bold tab10'>'Player': [],</span> <br></br>
                        <span className='bold tab10'>'GamesPlayed': [],</span> <br></br>
                        <span className='bold tab10'>'Goals': [],</span> <br></br>
                        <span className='bold tab10'>'Points': [],</span> <br></br>
                        <span className='bold tab10'>{'}'}</span> <br></br>
                        <br></br>
                        <span className='bold'>player = last_ten_players[0]</span> <br></br>
                        <span className='bold'>name = player.find('td').find('a')</span> <br></br>
                        <span className='bold'>year = player.find('td')</span> <br></br>
                        <br></br>
                        <span className='bold'>print(name)</span> <br></br>

                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )
}


