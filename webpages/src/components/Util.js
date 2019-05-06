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
	font-family: 'VT323', monospace;
`


