//------------ UTILS--------------//
const $ = (element) => document.querySelector(element);

//-----               DARK-LIGHT THEME               -----//

const darkThemeButton = $('#dark-theme-button');
const changeName = $('#change-name');

darkThemeButton.addEventListener('click', () => {
	document.body.classList.toggle('light-theme');
	document.body.classList.toggle('dark-theme');
	if ($('#change-name').innerHTML === 'Modo Oscuro') {
		$('#change-name').innerHTML = 'Modo Claro';
	} else {
		$('#change-name').innerHTML = 'Modo Oscuro';
	}
});

//-----             IMAGE AND TEXT BUTTONS             -----//

const textButton = $('#text-panel-button');
const imgButton = $('#img-panel-button');
const asideImgPanel = $('#panel-img');
const asideTextPanel = $('#panel-text');

textButton.addEventListener('click', () => {
	asideImgPanel.style.display = 'none';
	asideTextPanel.style.display = 'block';
});

imgButton.addEventListener('click', () => {
	asideTextPanel.style.display = 'none';
	asideImgPanel.style.display = 'block';
});

//-----                    PANEL                        -----//
//-----              PANEL CLOSE BUTTON                -----//

const closeButton = $('#panel-close-button');
const hidePanel = $('#panel');

closeButton.addEventListener('click', () => {
	hidePanel.style.display = 'none';
});

imgButton.addEventListener('click', () => {
	hidePanel.style.display = 'block';
});

textButton.addEventListener('click', () => {
	hidePanel.style.display = 'block';
});

//-----                   IMAGE PANEL                 -----//
//-----                    URL INPUT                  -----//

const memeBox = $('#image-meme');
const inputURL = $('#url-img-input');

inputURL.addEventListener('input', (e) => {
	const urlAdded = e.target.value;
	memeBox.style.background = `url("${urlAdded}")`;
	memeBox.style.backgroundSize = 'cover';
});

//-----                   BACKGROUND COLOR             -----//

const inputColor = $('#color-input');

inputColor.addEventListener('input', (e) => {
	memeBox.style.backgroundColor = e.target.value;
});

//-----                 BACKGROUND SELECT-MODE             -----//

const menuSelector = $('#mode-select');

inputColor.addEventListener('input', () => {
	const backgroundValue = inputColor.value;
	memeBox.style.backgroundColor = backgroundValue;
});

menuSelector.addEventListener('change', () => {
	memeBox.style.backgroundBlendMode = menuSelector.value;
});

//-----                      FILTERS                       -----//

const filterBrightness = $('#brightness-slider');

filterBrightness.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `brightness(${inputValue})`;
});

const filterOpacity = $('#opacity-slider');

filterOpacity.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `opacity(${inputValue})`;
});

const filterContrast = $('#contrast-slider');

filterContrast.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `contrast(${inputValue}%)`;
});

const filterBlur = $('#blur-slider');

filterBlur.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `blur(${inputValue}px)`;
});

const filterGray = $('#grayscale-slider');

filterGray.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `grayscale(${inputValue}%)`;
});

const filterSepia = $('#sepia-slider');

filterSepia.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `sepia(${inputValue}%)`;
});

const filterHue = $('#hue-slider');

filterHue.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `hue-rotate(${inputValue}deg)`;
});

const filterSaturate = $('#saturate-slider');

filterSaturate.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `saturate(${inputValue}%)`;
});

const filterInvert = $('#invert-slider');

filterInvert.addEventListener('input', (e) => {
	const inputValue = e.target.value;
	memeBox.style.filter = `invert(${inputValue}%)`;
});

//-----                  RESET FILTERS            -----//

const resetFiltersButton = $('#default-filters-button');

resetFiltersButton.addEventListener('click', (e) => {
	reset(e);
});

const reset = (e) => {
	e.preventDefault();
	memeBox.style.filter = `brightness(1)`;
	filterBrightness.value = 1;
	memeBox.style.filter = `opacity(1)`;
	filterOpacity.value = 1;
	memeBox.style.filter = `contrast(100)`;
	filterContrast.value = 100;
	memeBox.style.filter = `blur(0)`;
	filterBlur.value = 0;
	memeBox.style.filter = `grayscale(0)`;
	filterGray.value = 0;
	memeBox.style.filter = `sepia(0)`;
	filterSepia.value = 0;
	memeBox.style.filter = `hue-rotate(0)`;
	filterHue.value = 0;
	memeBox.style.filter = `invert(0)`;
	filterInvert.value = 0;
	filterSaturate.value = 0;
};

//-----                   TEXT PANEL                -----//
//-----              TOP AND BOTTOM TEXT           -----//

const topTextInput = $('#top-text-input');
const topText = $('#top-text');

topTextInput.addEventListener('input', (event) => {
	const addedTopText = event.target.value;
	topText.innerText = addedTopText;
});

const bottomTextInput = $('#bottom-text-input');
const bottomText = $('#bottom-text');

bottomTextInput.addEventListener('input', (event) => {
	const addedBottomText = event.target.value;
	bottomText.innerText = addedBottomText;
});

//-----             NO TOP AND BOTTOM TEXT           -----//

const noTopText = $('#top-text-checkbox');
const noBottomText = $('#bottom-text-checkbox');

noTopText.addEventListener('click', () => {
	if (noTopText.checked === true) {
		topText.style.display = 'none';
	} else {
		topText.style.display = 'block';
	}
});

noBottomText.addEventListener('click', () => {
	if (noBottomText.checked === true) {
		bottomText.style.display = 'none';
	} else {
		bottomText.style.display = 'block';
	}
});

//-----               FONT FAMILY                  -----//

const fontFamily = $('#text-font-select');

fontFamily.addEventListener('input', (e) => {
	topText.style.fontFamily = e.target.value;
	bottomText.style.fontFamily = e.target.value;
});

//-----               FONT SIZE                    -----//

const fontSize = $('#text-size-input');

fontSize.addEventListener('input', () => {
	topText.style.fontSize = `${fontSize.value}px`;
});

fontSize.addEventListener('input', () => {
	bottomText.style.fontSize = `${fontSize.value}px`;
});

//-----               ALIGNMENT                    -----//

const alignLeft = $('#text-left-align-button');
const alignCenter = $('#text-center-align-button');
const alignRight = $('#text-right-align-button');

alignLeft.addEventListener('click', () => {
	topText.style.textAlign = 'left';
	bottomText.style.textAlign = 'left';
});

alignCenter.addEventListener('click', () => {
	topText.style.textAlign = 'center';
	bottomText.style.textAlign = 'center';
});

alignRight.addEventListener('click', () => {
	topText.style.textAlign = 'right';
	bottomText.style.textAlign = 'right';
});

//-----           TEXT AND BACKGROUND COLOR        -----//

const fontColor = $('#text-color-input');
const backgroundColor = $('#text-background-color-input');

fontColor.addEventListener('input', (e) => {
	topText.style.color = e.target.value;
	bottomText.style.color = e.target.value;
});

backgroundColor.addEventListener('input', (e) => {
	topText.style.backgroundColor = e.target.value;
	bottomText.style.backgroundColor = e.target.value;
});

//                 TRANSPARENT BACKGROUND                 //

const transparentBackground = $('#background-checkbox');

transparentBackground.addEventListener('click', () => {
	if (transparentBackground.checked === true) {
		topText.style.display = 'none';
	} else {
		topText.style.display = 'block';
	}
});

transparentBackground.addEventListener('click', () => {
	if (transparentBackground.checked === true) {
		bottomText.style.display = 'none';
	} else {
		bottomText.style.display = 'block';
	}
});

//-----                OUTLINE           -----//

const noOutlineButton = $('#no-outline-button');
const lightOutlineButton = $('#light-outline-button');
const darkOutlineButton = $('#dark-outline-button');

noOutlineButton.addEventListener('click', () => {
	topText.style.textShadow = 'none';
	bottomText.style.textShadow = 'none';
});

lightOutlineButton.addEventListener('click', () => {
	topText.style.textShadow = '-1px 0 white, 0 1px white , 0 -1px white';
	bottomText.style.textShadow = '-1px 0 white, 0 1px white, 0 -1px white';
});

darkOutlineButton.addEventListener('click', () => {
	topText.style.textShadow = '-1px 0 black, 0 1px black , 0 -1px black';
	bottomText.style.textShadow = '-1px 0 black, 0 1px black, 0 -1px black';
});

//-----                PADDING           -----//

const paddingInput = $('#padding-input');
paddingInput.addEventListener('input', (e) => {
	const paddingY = paddingInput.value;
	topText.style.padding = `${paddingY}px 50px`;
	bottomText.style.padding = `${paddingY}px 50px`;
});
//-----                LINE HEIGHT       -----//

const lineHeightInput = $('#line-height-input');
lineHeightInput.addEventListener('input', (e) => {
	const lineHeight = lineHeightInput.value;
	topText.style.lineHeight = lineHeight;
	bottomText.style.lineHeight = lineHeight;
});

//-----                DOWNLOAD BUTTON       -----//

const memeContainer = $('#meme');
const downloadButton = $('#download-meme-button');

const downloadMeme = () => {
	domtoimage.toBlob(memeContainer).then(function(blob) {
		saveAs(blob, 'my-meme.png');
	});
};

downloadButton.addEventListener('click', downloadMeme);
