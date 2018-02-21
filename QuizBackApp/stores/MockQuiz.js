const MOCKED_DATA = [
  { 
  	'id': 1,
  	'difficulty': 'easy',
  	'questions': [
		{
  			'question':'What REPL stands for?',
  			'answer':'Read Eval Print Loop',
  			'options': [
  				'Research Eval Program Learn',
  				'Read Eval Point Loop',
  				'Read Earn Point Learn',
  				'Read Eval Print Loop'
  			]
  		},
  		{
  			'question':'What is the name of the default theme that is installed with Windows XP?',
  			'answer':'Luna',
  			'options': [
  				'Neptune',
  				'Luna',
  				'Whistler',
  				'Bliss'
  			]
  		},
  		{
  			'question':'12 - 8 = ?',
  			'answer':'4',
  			'options': [
  				'1',
  				'2',
  				'3',
  				'4'
  			]
  		},
  		{
  			'question':'5 + 7 = ?',
  			'answer':'12',
  			'options': [
  				'10',
  				'11',
  				'12',
  				'13'
  			]
  		},
		{
  			'question':'What does the term MIME stand for, in regards to computing?',
  			'answer':'Multipurpose Internet Mail Extensions',
  			'options': [
  				'Multipurpose Interleave Mail Exchange',
  				'Mail Internet Mail Exchange',
  				'Mail Interleave Method Exchange',
  				'Multipurpose Internet Mail Extensions'
  			]
  		}
  	]
  },

  { 
  	'id': 2,
  	'difficulty': 'meduim',
  	'questions': [
  		{
  			'question':'What was the first commerically available computer processor?',
  			'answer':'Intel 4004',
  			'options': [
  				'Intel 486SX',
  				'Intel 4004',
		        'TMS 1000',
		        'AMD AM386'
  			]
  		},
  		{
  			'question':'What is the main character of Metal Gear Solid 2?',
  			'answer':'Raiden',
  			'options': [
  				'Solidus Snake',
  				'Raiden',
  				'Big Boss',
  				'Venom Snake'
  			]
  		},
  		{
  			'question':'Which of these is NOT a game under the Worms series?',
  			'answer':'Major Malfunction',
  			'options': [
  				'Crazy Golf',
  				'Halo',
  				'Half-life',
  				'Major Malfunction'
  			]
  		},
  		{
  			'question':'Which country will host the 2020 Summer Olympics?',
  			'answer':'Japan',
  			'options': [
  				'China',
  				'France',
  				'Japan',
  				'Germany'
  			]
  		},
  		{
  			'question':'Which country is hosting the 2022 FIFA World Cup?',
  			'answer':'Qatar',
  			'options': [
  				'Bolivia',
  				'Vietnam',
  				'France',
  				'Qatar'
  			]
  		},
  		{
  			'question':'What national team won the 2016 edition of UEFA European Championship?',
  			'answer':'Portugal',
  			'options': [
  				'France',
  				'England',
  				'Portugal',
  				'Germany'
  			]
  		}
  	]
  },

  { 
  	'id': 3,
  	'difficulty': 'hard',
  	'questions': [
  		{
  			'question':'How many Hz does the video standard PAL support?',
  			'answer':'50',
  			'options': [
  				'59',
  				'60',
  				'25'
  			]
  		},
  		{
  			'question':'What vulnerability ranked #1 on the OWASP Top 10 in 2013?',
  			'answer':'Injection',
  			'options': [
  				'Injection',
  				'Broken Authentication',
  				'Cross-Site Scripting',
  				'Insecure Direct Object References'
  			]
  		},
  		{
  			'question':'Which of the following is the oldest of these computers by release date?',
  			'answer':'TRS-80',
  			'options': [
  				'Commodore 64',
  				'TRS-80',
  				'ZX Spectrum',
  				'Apple 3'
  			]
  		},
  		{
  			'question':'Which actors made up the trio in &quot;The Good, the Bad, and the Ugly&quot;?',
  			'answer':'Clint Eastwood, Eli Wallach, and Lee Van Cleef',
  			'options': [
  				'Yul Brynner, Steve McQueen, and Charles Bronson',
  				'Clint Eastwood, Eli Wallach, and Lee Van Cleef',
  				'Sergio Leone, Ennio Morricone, and Tonino Delli Colli',
  				'Aldo Giuffr&egrave;, Mario Brega, and Luigi Pistilli'
  			]
  		},
  		{
  			'question':'Which actress portrayed Dr. Grace Augustine in the James Cameron movie &quot;Avatar&quot;?',
  			'answer':'Sigourney Weaver',
  			'options': [
  				'Jessica Chastain',
  				'Sigourney Weaver',
  				'Melissa Beckett',
  				'Alyssa Monroe'
  			]
  		}
  	]
  },
]

module.exports = MOCKED_DATA;