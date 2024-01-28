# Music Player

## Table of Contents

1. Introduction
2. File Structure
3. HTML Structure
4. CSS Styling
5. JavaScript Functionality
6. Songs Array
7. Functions
    * loadSongs
    * playPause
    * playNextSong
    * playPreviousSong
8. Event Listeners
9. Live link

## 1. Introduction

* This document provides documentation for the Music Player web application. The player allows users to play, pause, and navigate through a list of songs.

## 2. File Structure

* index.html: Contains the HTML structure of the player.
* style.css: Defines the styling for the player.
* script.js: Implements the functionality and behavior of the player.

## 3. HTML Structure

* The HTML file (index.html) defines the structure of the music player. It includes the necessary meta tags, links to external resources (FontAwesome, Google Fonts), and the player elements such as navigation, song details, audio controls, and buttons.

## 4. CSS Styling

* The CSS file (style.css) provides styling for the music player. It includes styles for the container, navigation buttons, song image, title, artist, progress bar, and control buttons.

## 5. JavaScript Functionality

* The JavaScript file (script.js) contains the logic for the music player. It handles the loading of songs, play/pause functionality, updating the progress bar, and managing next/previous song actions.

## 6. Songs Array

* The Songs array in JavaScript contains objects representing individual songs. Each object includes properties such as title, artist, image, and path.

## 7. Functions

### loadSongs

* Description: Loads a song into the player by updating the displayed information and setting the audio source.
* Parameters: songs - An object representing the current song.

### playPause

* Description: Toggles between play and pause states, updating the player's appearance accordingly.

### playNextSong

* Description: Loads and plays the next song in the playlist.

### playPreviousSong

* Description: Loads and plays the previous song in the playlist.

## 8. Event Listeners

* play Button: Toggles play/pause state when clicked.
* playNext Button: Loads and plays the next song when clicked.
* playPrevious Button: Loads and plays the previous song when clicked.

## 9. Live Link

[Music-Player live link](https://elangovan16.github.io/Music-Player/)