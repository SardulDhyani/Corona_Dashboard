import axios from 'axios';

const exampleResponse = {
  countries_stat: [
    {
      country_name: 'USA',
      cases: '521,714',
      deaths: '20,064',
      total_recovered: '28,580',
    },
    ,
    {
      country_name: 'Spain',
      cases: '161,852',
      deaths: '16,353',
      total_recovered: '59,109',
    },
    {
      country_name: 'Italy',
      cases: '152,271',
      deaths: '19,468',
      total_recovered: '32,534',
    },
    {
      country_name: 'France',
      cases: '129,654',
      deaths: '13,832',
      total_recovered: '26,391',
    },
    {
      country_name: 'Germany',
      cases: '123,878',
      deaths: '2,736',
      total_recovered: '53,913',
    },
    {
      country_name: 'UK',
      cases: '78,991',
      deaths: '9,875',
      total_recovered: '344',
    },
    {
      country_name: 'Iran',
      cases: '70,029',
      deaths: '4,357',
      total_recovered: '41,947',
    },
    {
      country_name: 'Turkey',
      cases: '52,167',
      deaths: '1,101',
      total_recovered: '2,965',
    },
    {
      country_name: 'Belgium',
      cases: '28,018',
      deaths: '3,346',

      total_recovered: '5,986',
    },
    {
      country_name: 'Switzerland',
      cases: '25,107',
      deaths: '1,036',
      total_recovered: '11,100',
    },
    {
      country_name: 'Netherlands',
      cases: '24,413',
      deaths: '2,643',
      total_recovered: '250',
    },
    {
      country_name: 'Canada',
      cases: '22,575',
      deaths: '600',
      total_recovered: '6,013',
    },
    {
      country_name: 'Brazil',
      cases: '20,022',
      deaths: '1,075',
      total_recovered: '173',
    },
    {
      country_name: 'Portugal',
      cases: '15,987',
      deaths: '470',

      total_recovered: '266',
    },
    {
      country_name: 'Austria',
      cases: '13,798',
      deaths: '337',

      total_recovered: '6,604',
    },
    {
      country_name: 'Russia',
      cases: '13,584',
      deaths: '106',
      total_recovered: '1,045',
    },
    {
      country_name: 'Israel',
      cases: '10,525',
      deaths: '96',

      total_recovered: '1,258',
    },
    {
      country_name: 'S. Korea',
      cases: '10,480',
      deaths: '211',

      total_recovered: '7,243',
    },
    {
      country_name: 'Sweden',
      cases: '10,151',
      deaths: '887',

      total_recovered: '381',
    },
    {
      country_name: 'India',
      cases: '8,339',
      deaths: '288',

      total_recovered: '969',
    },
    {
      country_name: 'Ireland',
      cases: '8,089',
      deaths: '287',

      total_recovered: '25',
    },
    {
      country_name: 'Ecuador',
      cases: '7,257',
      deaths: '315',

      total_recovered: '411',
    },
    {
      country_name: 'Chile',
      cases: '6,927',
      deaths: '73',

      total_recovered: '1,864',
    },
    {
      country_name: 'Peru',
      cases: '6,848',
      deaths: '181',

      total_recovered: '1,739',
    },
    {
      country_name: 'Norway',
      cases: '6,403',
      deaths: '117',

      total_recovered: '32',
    },
    {
      country_name: 'Poland',
      cases: '6,356',
      deaths: '208',

      total_recovered: '375',
    },
    {
      country_name: 'Australia',
      cases: '6,303',
      deaths: '56',

      total_recovered: '3,265',
    },
    {
      country_name: 'Japan',
      cases: '6,005',
      deaths: '99',

      total_recovered: '762',
    },
    {
      country_name: 'Denmark',
      cases: '5,996',
      deaths: '260',

      total_recovered: '1,955',
    },
    {
      country_name: 'Romania',
      cases: '5,990',
      deaths: '291',

      total_recovered: '758',
    },
    {
      country_name: 'Czechia',
      cases: '5,831',
      deaths: '129',

      total_recovered: '411',
    },
    {
      country_name: 'Pakistan',
      cases: '5,011',
      deaths: '77',

      total_recovered: '762',
    },
    {
      country_name: 'Malaysia',
      cases: '4,530',
      deaths: '73',

      total_recovered: '1,995',
    },
    {
      country_name: 'Philippines',
      cases: '4,428',
      deaths: '247',

      total_recovered: '157',
    },
    {
      country_name: 'Saudi Arabia',
      cases: '4,033',
      deaths: '52',

      total_recovered: '720',
    },
    {
      country_name: 'Mexico',
      cases: '3,844',
      deaths: '233',

      total_recovered: '633',
    },
    {
      country_name: 'Indonesia',
      cases: '3,842',
      deaths: '327',

      total_recovered: '286',
    },
    {
      country_name: 'UAE',
      cases: '3,736',
      deaths: '20',

      total_recovered: '588',
    },
    {
      country_name: 'Serbia',
      cases: '3,380',
      deaths: '74',

      total_recovered: '118',
    },
    {
      country_name: 'Luxembourg',
      cases: '3,270',
      deaths: '62',

      total_recovered: '500',
    },
    {
      country_name: 'Panama',
      cases: '2,974',
      deaths: '74',

      total_recovered: '17',
    },
    {
      country_name: 'Finland',
      cases: '2,905',
      deaths: '49',

      total_recovered: '300',
    },
    {
      country_name: 'Qatar',
      cases: '2,728',
      deaths: '6',

      total_recovered: '247',
    },
    {
      country_name: 'Dominican Republic',
      cases: '2,620',
      deaths: '126',

      total_recovered: '98',
    },
    {
      country_name: 'Thailand',
      cases: '2,518',
      deaths: '35',

      total_recovered: '1,135',
    },
    {
      country_name: 'Ukraine',
      cases: '2,511',
      deaths: '73',

      total_recovered: '79',
    },
    {
      country_name: 'Colombia',
      cases: '2,473',
      deaths: '80',

      total_recovered: '197',
    },
    {
      country_name: 'Singapore',
      cases: '2,299',
      deaths: '8',

      total_recovered: '528',
    },
    {
      country_name: 'Belarus',
      cases: '2,226',
      deaths: '23',

      total_recovered: '172',
    },
    {
      country_name: 'Greece',
      cases: '2,081',
      deaths: '93',

      total_recovered: '269',
    },
    {
      country_name: 'South Africa',
      cases: '2,028',
      deaths: '25',

      total_recovered: '410',
    },
    {
      country_name: 'Argentina',
      cases: '1,975',
      deaths: '83',

      total_recovered: '440',
    },
    {
      country_name: 'Algeria',
      cases: '1,825',
      deaths: '275',

      total_recovered: '460',
    },
    {
      country_name: 'Egypt',
      cases: '1,794',
      deaths: '135',

      total_recovered: '384',
    },
    {
      country_name: 'Iceland',
      cases: '1,689',
      deaths: '7',

      total_recovered: '841',
    },
    {
      country_name: 'Moldova',
      cases: '1,560',
      deaths: '30',

      total_recovered: '75',
    },
    {
      country_name: 'Morocco',
      cases: '1,545',
      deaths: '111',

      total_recovered: '146',
    },
    {
      country_name: 'Croatia',
      cases: '1,534',
      deaths: '21',

      total_recovered: '323',
    },
    {
      country_name: 'Iraq',
      cases: '1,318',
      deaths: '72',
      total_recovered: '601',
    },
    {
      country_name: 'New Zealand',
      cases: '1,312',
      deaths: '4',

      total_recovered: '422',
    },
    {
      country_name: 'Hungary',
      cases: '1,310',
      deaths: '85',

      total_recovered: '115',
    },
    {
      country_name: 'Estonia',
      cases: '1,304',
      deaths: '24',

      total_recovered: '93',
    },
    {
      country_name: 'Slovenia',
      cases: '1,188',
      deaths: '50',

      total_recovered: '148',
    },
    {
      country_name: 'Kuwait',
      cases: '1,154',
      deaths: '1',

      total_recovered: '133',
    },
    {
      country_name: 'Azerbaijan',
      cases: '1,058',
      deaths: '11',

      total_recovered: '200',
    },
    {
      country_name: 'Lithuania',
      cases: '1,026',
      deaths: '23',

      total_recovered: '54',
    },
    {
      country_name: 'Bahrain',
      cases: '1,016',
      deaths: '6',

      total_recovered: '551',
    },
    {
      country_name: 'Hong Kong',
      cases: '1,001',
      deaths: '4',

      total_recovered: '336',
    },
    {
      country_name: 'Armenia',
      cases: '977',
      deaths: '13',

      total_recovered: '173',
    },
    {
      country_name: 'Bosnia and Herzegovina',
      cases: '935',
      deaths: '37',

      total_recovered: '139',
    },
    {
      country_name: 'Kazakhstan',
      cases: '865',
      deaths: '10',

      total_recovered: '81',
    },
    {
      country_name: 'Cameroon',
      cases: '820',
      deaths: '12',

      total_recovered: '98',
    },
    {
      country_name: 'North Macedonia',
      cases: '760',
      deaths: '34',

      total_recovered: '41',
    },
    {
      country_name: 'Uzbekistan',
      cases: '729',
      deaths: '3',

      total_recovered: '42',
    },
    {
      country_name: 'Slovakia',
      cases: '728',
      deaths: '2',

      total_recovered: '23',
    },
    {
      country_name: 'Diamond Princess',
      cases: '712',
      deaths: '11',

      total_recovered: '619',
    },
    {
      country_name: 'Tunisia',
      cases: '685',
      deaths: '28',

      total_recovered: '43',
    },
    {
      country_name: 'Bulgaria',
      cases: '661',
      deaths: '28',

      total_recovered: '62',
    },
    {
      country_name: 'Latvia',
      cases: '630',
      deaths: '3',

      total_recovered: '16',
    },
    {
      country_name: 'Cuba',
      cases: '620',
      deaths: '16',

      total_recovered: '77',
    },
    {
      country_name: 'Lebanon',
      cases: '619',
      deaths: '20',

      total_recovered: '77',
    },
    {
      country_name: 'Cyprus',
      cases: '616',
      deaths: '10',

      total_recovered: '61',
    },
    {
      country_name: 'Andorra',
      cases: '601',
      deaths: '26',

      total_recovered: '71',
    },
    {
      country_name: 'Costa Rica',
      cases: '558',
      deaths: '3',

      total_recovered: '42',
    },
    {
      country_name: 'Afghanistan',
      cases: '555',
      deaths: '18',

      total_recovered: '32',
    },
    {
      country_name: 'Oman',
      cases: '546',
      deaths: '3',

      total_recovered: '109',
    },
    {
      country_name: 'Uruguay',
      cases: '494',
      deaths: '7',

      total_recovered: '214',
    },
    {
      country_name: 'Bangladesh',
      cases: '482',
      deaths: '30',

      total_recovered: '36',
    },
    {
      country_name: 'Ivory Coast',
      cases: '480',
      deaths: '3',

      total_recovered: '54',
    },
    {
      country_name: 'Burkina Faso',
      cases: '448',
      deaths: '26',

      total_recovered: '149',
    },
    {
      country_name: 'Niger',
      cases: '438',
      deaths: '11',

      total_recovered: '41',
    },
    {
      country_name: 'Albania',
      cases: '433',
      deaths: '23',

      total_recovered: '197',
    },
    {
      country_name: 'Ghana',
      cases: '408',
      deaths: '8',

      total_recovered: '4',
    },
    {
      country_name: 'Channel Islands',
      cases: '398',
      deaths: '9',

      total_recovered: '40',
    },
    {
      country_name: 'Honduras',
      cases: '392',
      deaths: '24',

      total_recovered: '7',
    },
    {
      country_name: 'Réunion',
      cases: '388',
      deaths: '0',

      total_recovered: '40',
    },
    {
      country_name: 'Taiwan',
      cases: '385',
      deaths: '6',

      total_recovered: '99',
    },
    {
      country_name: 'Jordan',
      cases: '381',
      deaths: '7',

      total_recovered: '177',
    },
    {
      country_name: 'Malta',
      cases: '370',
      deaths: '3',

      total_recovered: '16',
    },
    {
      country_name: 'San Marino',
      cases: '356',
      deaths: '35',

      total_recovered: '53',
    },
    {
      country_name: 'Kyrgyzstan',
      cases: '339',
      deaths: '5',

      total_recovered: '44',
    },
    {
      country_name: 'Mauritius',
      cases: '319',
      deaths: '9',

      total_recovered: '28',
    },
    {
      country_name: 'Nigeria',
      cases: '305',
      deaths: '7',

      total_recovered: '58',
    },
    {
      country_name: 'Senegal',
      cases: '278',
      deaths: '2',

      total_recovered: '152',
    },
    {
      country_name: 'Bolivia',
      cases: '275',
      deaths: '20',

      total_recovered: '2',
    },
    {
      country_name: 'Palestine',
      cases: '268',
      deaths: '2',

      total_recovered: '57',
    },
    {
      country_name: 'Montenegro',
      cases: '263',
      deaths: '2',

      total_recovered: '5',
    },
    {
      country_name: 'Vietnam',
      cases: '258',
      deaths: '0',

      total_recovered: '144',
    },
    {
      country_name: 'Georgia',
      cases: '242',
      deaths: '3',
      total_recovered: '60',
    },
    {
      country_name: 'Isle of Man',
      cases: '226',
      deaths: '1',

      total_recovered: '112',
    },
    {
      country_name: 'DRC',
      cases: '223',
      deaths: '20',

      total_recovered: '16',
    },
    {
      country_name: 'Guinea',
      cases: '212',
      deaths: '0',

      total_recovered: '15',
    },
    {
      country_name: 'Sri Lanka',
      cases: '198',
      deaths: '7',

      total_recovered: '54',
    },
    {
      country_name: 'Mayotte',
      cases: '196',
      deaths: '3',

      total_recovered: '59',
    },
    {
      country_name: 'Kenya',
      cases: '191',
      deaths: '7',

      total_recovered: '24',
    },
    {
      country_name: 'Djibouti',
      cases: '187',
      deaths: '2',

      total_recovered: '36',
    },
    {
      country_name: 'Faeroe Islands',
      cases: '184',
      deaths: '0',

      total_recovered: '145',
    },
    {
      country_name: 'Venezuela',
      cases: '175',
      deaths: '9',

      total_recovered: '84',
    },
    {
      country_name: 'Martinique',
      cases: '155',
      deaths: '6',

      total_recovered: '50',
    },
    {
      country_name: 'Guadeloupe',
      cases: '143',
      deaths: '8',

      total_recovered: '67',
    },
    {
      country_name: 'Guatemala',
      cases: '137',
      deaths: '3',

      total_recovered: '19',
    },
    {
      country_name: 'Brunei',
      cases: '136',
      deaths: '1',

      total_recovered: '104',
    },
    {
      country_name: 'Paraguay',
      cases: '133',
      deaths: '6',

      total_recovered: '18',
    },
    {
      country_name: 'Gibraltar',
      cases: '129',
      deaths: '0',

      total_recovered: '84',
    },
    {
      country_name: 'Cambodia',
      cases: '120',
      deaths: '0',

      total_recovered: '75',
    },
    {
      country_name: 'El Salvador',
      cases: '118',
      deaths: '6',
      total_recovered: '19',
    },
    {
      country_name: 'Rwanda',
      cases: '118',
      deaths: '0',
      total_recovered: '18',
    },
    {
      country_name: 'Trinidad and Tobago',
      cases: '109',
      deaths: '8',

      total_recovered: '3',
    },
    {
      country_name: 'Madagascar',
      cases: '102',
      deaths: '0',

      total_recovered: '11',
    },
    {
      country_name: 'Monaco',
      cases: '92',
      deaths: '1',

      total_recovered: '5',
    },
    {
      country_name: 'Aruba',
      cases: '92',
      deaths: '0',

      total_recovered: '29',
    },
    {
      country_name: 'Mali',
      cases: '87',
      deaths: '7',
      total_recovered: '22',
    },
    {
      country_name: 'French Guiana',
      cases: '83',
      deaths: '0',

      total_recovered: '43',
    },
    {
      country_name: 'Liechtenstein',
      cases: '79',
      deaths: '1',

      total_recovered: '55',
    },
    {
      country_name: 'Togo',
      cases: '76',
      deaths: '3',

      total_recovered: '25',
    },
    {
      country_name: 'Ethiopia',
      cases: '69',
      deaths: '3',

      total_recovered: '10',
    },
    {
      country_name: 'Barbados',
      cases: '67',
      deaths: '4',

      total_recovered: '11',
    },
    {
      country_name: 'Jamaica',
      cases: '65',
      deaths: '4',
      total_recovered: '13',
    },
    {
      country_name: 'Congo',
      cases: '60',
      deaths: '5',

      total_recovered: '5',
    },
    {
      country_name: 'Uganda',
      cases: '53',
      deaths: '0',

      total_recovered: '3',
    },
    {
      country_name: 'French Polynesia',
      cases: '51',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Sint Maarten',
      cases: '50',
      deaths: '8',

      total_recovered: '3',
    },
    {
      country_name: 'Liberia',
      cases: '48',
      deaths: '5',

      total_recovered: '3',
    },
    {
      country_name: 'Bermuda',
      cases: '48',
      deaths: '4',

      total_recovered: '25',
    },
    {
      country_name: 'Gabon',
      cases: '46',
      deaths: '1',

      total_recovered: '1',
    },
    {
      country_name: 'Cayman Islands',
      cases: '45',
      deaths: '1',

      total_recovered: '6',
    },
    {
      country_name: 'Macao',
      cases: '45',
      deaths: '0',

      total_recovered: '10',
    },
    {
      country_name: 'Bahamas',
      cases: '42',
      deaths: '8',

      total_recovered: '5',
    },
    {
      country_name: 'Guyana',
      cases: '40',
      deaths: '6',

      total_recovered: '8',
    },
    {
      country_name: 'Zambia',
      cases: '40',
      deaths: '2',

      total_recovered: '28',
    },
    {
      country_name: 'Guinea-Bissau',
      cases: '38',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Benin',
      cases: '35',
      deaths: '1',

      total_recovered: '5',
    },
    {
      country_name: 'Eritrea',
      cases: '34',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Tanzania',
      cases: '32',
      deaths: '3',
      total_recovered: '5',
    },
    {
      country_name: 'Saint Martin',
      cases: '32',
      deaths: '2',
      total_recovered: '11',
    },
    {
      country_name: 'Myanmar',
      cases: '31',
      deaths: '3',
      total_recovered: '2',
    },
    {
      country_name: 'Haiti',
      cases: '31',
      deaths: '2',
      total_recovered: '0',
    },
    {
      country_name: 'Syria',
      cases: '25',
      deaths: '5',

      total_recovered: '5',
    },
    {
      country_name: 'Libya',
      cases: '24',
      deaths: '1',

      total_recovered: '8',
    },
    {
      country_name: 'Antigua and Barbuda',
      cases: '21',
      deaths: '2',

      total_recovered: '0',
    },
    {
      country_name: 'Somalia',
      cases: '21',
      deaths: '1',

      total_recovered: '1',
    },
    {
      country_name: 'Mozambique',
      cases: '20',
      deaths: '0',

      total_recovered: '2',
    },
    {
      country_name: 'Angola',
      cases: '19',
      deaths: '2',

      total_recovered: '2',
    },
    {
      country_name: 'Sudan',
      cases: '19',
      deaths: '2',

      total_recovered: '2',
    },
    {
      country_name: 'Maldives',
      cases: '19',
      deaths: '0',

      total_recovered: '13',
    },
    {
      country_name: 'Equatorial Guinea',
      cases: '18',
      deaths: '0',
      total_recovered: '3',
    },
    {
      country_name: 'Laos',
      cases: '18',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'New Caledonia',
      cases: '18',
      deaths: '0',

      total_recovered: '1',
    },
    {
      country_name: 'Dominica',
      cases: '16',
      deaths: '0',

      total_recovered: '5',
    },
    {
      country_name: 'Fiji',
      cases: '16',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Mongolia',
      cases: '16',
      deaths: '0',

      total_recovered: '4',
    },
    {
      country_name: 'Namibia',
      cases: '16',
      deaths: '0',

      total_recovered: '3',
    },
    {
      country_name: 'Saint Lucia',
      cases: '15',
      deaths: '0',

      total_recovered: '1',
    },
    {
      country_name: 'Curaçao',
      cases: '14',
      deaths: '1',

      total_recovered: '7',
    },
    {
      country_name: 'Grenada',
      cases: '14',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Zimbabwe',
      cases: '13',
      deaths: '3',

      total_recovered: '0',
    },
    {
      country_name: 'Belize',
      cases: '13',
      deaths: '2',

      total_recovered: '0',
    },
    {
      country_name: 'Botswana',
      cases: '13',
      deaths: '1',

      total_recovered: '0',
    },
    {
      country_name: 'Malawi',
      cases: '12',
      deaths: '2',

      total_recovered: '0',
    },
    {
      country_name: 'Saint Kitts and Nevis',
      cases: '12',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'St. Vincent Grenadines',
      cases: '12',
      deaths: '0',

      total_recovered: '1',
    },
    {
      country_name: 'Eswatini',
      cases: '12',
      deaths: '0',

      total_recovered: '7',
    },
    {
      country_name: 'Chad',
      cases: '11',
      deaths: '0',

      total_recovered: '2',
    },
    {
      country_name: 'Greenland',
      cases: '11',
      deaths: '0',

      total_recovered: '11',
    },
    {
      country_name: 'Seychelles',
      cases: '11',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Suriname',
      cases: '10',
      deaths: '1',

      total_recovered: '4',
    },
    {
      country_name: 'MS Zaandam',
      cases: '9',
      deaths: '2',
      total_recovered: '0',
    },
    {
      country_name: 'Nepal',
      cases: '9',
      deaths: '0',

      total_recovered: '1',
    },
    {
      country_name: 'Montserrat',
      cases: '9',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Cabo Verde',
      cases: '8',
      deaths: '1',

      total_recovered: '1',
    },
    {
      country_name: 'Nicaragua',
      cases: '8',
      deaths: '1',

      total_recovered: '0',
    },
    {
      country_name: 'Turks and Caicos',
      cases: '8',
      deaths: '1',

      total_recovered: '0',
    },
    {
      country_name: 'CAR',
      cases: '8',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Vatican City',
      cases: '8',
      deaths: '0',

      total_recovered: '2',
    },
    {
      country_name: 'Sierra Leone',
      cases: '8',
      deaths: '0',
      total_recovered: '0',
    },
    {
      country_name: 'Mauritania',
      cases: '7',
      deaths: '1',

      total_recovered: '2',
    },
    {
      country_name: 'St. Barth',
      cases: '6',
      deaths: '0',
      total_recovered: '1',
    },
    {
      country_name: 'Bhutan',
      cases: '5',
      deaths: '0',

      total_recovered: '2',
    },
    {
      country_name: 'Burundi',
      cases: '5',
      deaths: '0',

      total_recovered: '0',
    },

    {
      country_name: 'Falkland Islands',
      cases: '5',
      deaths: '0',

      total_recovered: '1',
    },
    {
      country_name: 'Gambia',
      cases: '4',
      deaths: '1',

      total_recovered: '2',
    },
    {
      country_name: 'Sao Tome and Principe',
      cases: '4',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'South Sudan',
      cases: '4',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Western Sahara',
      cases: '4',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Anguilla',
      cases: '3',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'British Virgin Islands',
      cases: '3',
      deaths: '0',

      total_recovered: '2',
    },
    {
      country_name: 'Caribbean Netherlands',
      cases: '2',
      deaths: '0',
      total_recovered: '0',
    },
    {
      country_name: 'Papua New Guinea',
      cases: '2',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'Timor-Leste',
      cases: '2',
      deaths: '0',

      total_recovered: '1',
    },
    {
      country_name: 'Saint Pierre Miquelon',
      cases: '1',
      deaths: '0',
      total_recovered: '0',
    },
    {
      country_name: 'Yemen',
      cases: '1',
      deaths: '0',

      total_recovered: '0',
    },
    {
      country_name: 'China',
      cases: '81,953',
      deaths: '3,339',

      total_recovered: '77,525',
    },
  ],
  statistic_taken_at: '2020-04-11 17:59:07',
  world_total: {
    total_cases: '1,760,871',
    total_deaths: '107,645',
    total_recovered: '395,652',
    new_cases: '62,036',
    statistic_taken_at: '2020-04-11 17:59:07',
  },
};

export const fetchData = async () => {
  try{
    const { data } = await axios({
        "method":"GET",
        "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_SECRET,
        "useQueryString":true
      }
    });

    return data;

  } catch(error){ 
    console.log(error);
    return exampleResponse;
  }
};
