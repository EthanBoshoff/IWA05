FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

const area = 'RSA'
let currency = null
let shipping = null
let customers = '1'

if (area === 'RSA')
{shipping = 400; currency = 'R' }

if (area === 'NAM')
{shipping = 600; currency = '$'}
else {shipping = 800;}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 'NONE_SELECTED'
let batteries = 35 * 2
let pens = 5 * 'NONE_SELECTED' 

if (shoes + batteries + pens + shirts > 1000) {
	if (area === NAM && customers < 2) {	
		if (area === RSA)
		    shipping = 0 || calcShipping
		}
	}

if (shipping === 0 && customers !== 1)  {console.log() }

area = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)