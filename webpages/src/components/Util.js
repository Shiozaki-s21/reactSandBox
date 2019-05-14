// import modules
import styled from 'styled-components'
import WebFont from 'webfontloader';


// font
WebFont.load({
	google: {
		families: ['VT323', 'monospace']
	}
});

// logo which is written by black ink
export const BlackIcon = styled.img`
	height: 400px;
	width: 400px;
	position: absolute;
	// zIndex: 0;
	top: 0px;
	right: 15%;
	bottom: 0;
	left: auto;
	margin: auto;`

export const GreetingOnHomePage = styled.div`
	position: absolute;
	left: 10%;
	top: 50%;
	transform: translateY(-50%);
	width: 40%;
	max-height: 90%;`;

// components for footer

export const FootTab = styled.div`
	display: block;
	width: 100%;
	position: fixed;
	left: 0px;
	bottom: 0px;
	zIndex: 1000;
	textAlign: center;
	backgroundColor: #000000`

// components for header

// picture for me
// size should be flexible

// css for div for description for me
// must be absolute



//component for title
export const HomeTitle = styled.h1`
	//TODO: To add animation
	font-family: 'VT323', monospace;
	color: #00ffff;
	text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
	font-size: 100px;`

export const HomeSubTitle = styled.h2`
	font-family: 'VT323', monospace;
	color: #EEE;
	text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
	font-size:30px;`

export const TitleBlock = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);`

export const HomeMenuLink = styled.h3`
	font-family: 'VT323', monospace;
	color: #EEE;
	margin: 0 auto;
	text-font: 15px
`

export const LeftDescription = styled.span`
  float: right;
  width: 200px;
  height: 400px;
  shape-outside: polygon(200px 400px, 200px 200px, -0.5% 50%, 0px 400px);
`

export const RightDescription = styled.span`
  float: left;
  width: 200px;
  height: 400px;
  shape-outside: polygon(200px 400px, 200px 200px, -0.5% 50%, 0px 400px);
`

export const AboutP = styled.p`
  text-align: justify;
  hyphens: auto;
  margin: 0;
  color: #FFF
`

export const AboutDiv = styled.div`
  width: 400px;
  height: 400px;
`
export const AboutTitle = styled.h2`
	font-family: 'VT323', monospace;
	color: #00ffff;
	text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
	font-size: 80px`

export const MyPicture = styled.img`
	height: 400px;
	width: 400px;
	border-radius: 50%;
	// position: absolute;
	// // zIndex: 0;
	// top: 0px;
	// bottom: 0;
	// left: auto;
	// margin: auto;
`

export const AboutMeDescription = styled.p`
	font-family: 'VT323', monospace;
	font-size: 20px;
	width: 60%;
	word-wrap: break-word;
	margin: auto;
	color: white
`

export const AboutLink = styled.a`
	font-family: 'VT323', monospace;	
	font-size: 50px;
	color: ${props => props ? props.color : 'palevioletred'};
	// to add home address insted of default
	href => ${props => props.primary ? 'https://github.com/Shiozaki-s21' : 'palevioletred'};
	
	`

export const LinkImage = styled.img`
	
`