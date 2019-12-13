# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
address=[
  {
    street_number: 1701, 
    route: 'ROBSON STREET',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6G 1C9',
    country: 'Canada'
  },
  {
    street_number: 1610, 
    route: 'DAVIE STREET',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6G 1V9 ',
    country: 'Canada'
  },
   {
    street_number: 1055,
    route: 'W. GEORGIA ST.',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6E 3P2',
    country: 'Canada'
  },
   {
    street_number: 200, 
    route: 'Burrard St.',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6C 3L6',
    country: 'Canada'
  }, 
   {
    street_number: 891, 
    route: 'GRANVILLE ST.',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:' V6Z 1K7',
    country: 'Canada'
  },
   {
    street_number: 1527, 
    route: 'MAIN ST',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6A 2W5',
    country: 'Canada'
  },
   {
    street_number: 537, 
    route: 'WEST BROADWAY',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V5Z 1E6 ',
    country: 'Canada'
  },
  {
    street_number: 2095, 
    route: 'WEST 41ST AVE',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6M 1Y7',
    country: 'Canada'
  },
  {
    street_number: 2021, 
    route: 'KINGSWAY',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V5N 2T2',
    country: 'Canada'
  },
  {
    street_number: 4445, 
    route: 'Main St.',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V5V 3R2 ',
    country: 'Canada'
  },
  {
    street_number: 2095, 
    route: 'WEST 41ST AVE',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6M 1Y7',
    country: 'Canada'
  },
  {
    street_number: 5661, 
    route: 'VICTORIA DRIVE',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V5P 3W2',
    country: 'Canada'
  },
  {
    street_number: 7289, 
    route: 'KNIGHT ST.',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V5P 2W9',
    country: 'Canada'
  },
  {
    street_number: 830, 
    route: 'SW MARINE DR',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6P 5Y8',
    country: 'Canada'
  },
  {
    street_number: 8631, 
    route: 'GRANVILLE AVENUE',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:'V6P 5A2',
    country: 'Canada'
  },
  {
    street_number: 160, 
    route: 'S.W. MARINE DR.',
    locality: 'Vancouver',
    administrative_area_level_1: 'BC',
    postal_code:' V5X 2R1',
    country: 'Canada'
  },
  {
    street_number: 4410, 
    route: 'STILL CREEK DRIVE',
    locality: 'Burnaby',
    administrative_area_level_1: 'BC',
    postal_code:'V5C 6C6',
    country: 'Canada'
  },
  {
    street_number: 4700, 
    route: 'KINGSWAY',
    locality: 'Burnaby',
    administrative_area_level_1: 'BC',
    postal_code:'V5H 4M1',
    country: 'Canada'
  },
  {
    street_number: 7229, 
    route: 'KINGSWAY',
    locality: 'Burnaby',
    administrative_area_level_1: 'BC',
    postal_code:'V5E 1G5',
    country: 'Canada'
  },
  {
    street_number: 515, 
    route: '6th St.',
    locality: 'NEW WESTMINSTER',
    administrative_area_level_1: 'BC',
    postal_code:'V3L 5H1',
    country: 'Canada'
  },
  {
    street_number: 815, 
    route: 'MCBRIDE BLVD.',
    locality: 'NEW WESTMINSTER',
    administrative_area_level_1: 'BC',
    postal_code:'V3L 2B9',
    country: 'Canada'
  },
  {
    street_number: 531, 
    route: 'CLARKE ROAD',
    locality: 'COQUITLAM',
    administrative_area_level_1: 'BC',
    postal_code:'V3J 3X4',
    country: 'Canada'
  },
  {
    street_number: 515, 
    route: 'NORTH RD.',
    locality: 'COQUITLAM',
    administrative_area_level_1: 'BC',
    postal_code:'V3J 1N7',
    country: 'Canada'
  },
]
Listing.delete_all
User.delete_all

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    phone: '6044218321',
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: 'PASSWORD'
  )
end
users=User.all

for i in 0...address.length do
  puts i
  puts address[i]
# byebug

  l=Listing.create(
    street_number: address[i][:street_number],
    route: address[i][:route],
    locality: address[i][:locality],
    administrative_area_level_1: address[i][:administrative_area_level_1],
    postal_code: address[i][:postal_code],
    country: address[i][:country],
    description:'Private setting! Gleaming Hardwood throughout with some ceramic tile flooring. Main floor features large sunken living room with wood burning fireplace, kitchen with eating area, dining room & family room. Upper level has large master bedroom & 4 piece ensuite with separate tub & shower, 2 additional bedrooms and 4 piece bath & laundry. Downstairs has huge recreation room, flex space and 280 sqft of storage/crawl space. Crawl space not included in sqft. Close to schools, transit, shopping, walking trails & recreation. Short drive to Lougheed Mall, Costco, Cameron Rec Ctr, Restaurants & more.',
    bedroom: rand(1..5),
    bathroom: rand(1..5),
    price: rand(1000..4000),
    sqft: rand(800..3000),
    fireplace: (rand(0..1)==0 ? true : false),
    deck: (rand(0..1)==0 ? true : false),
    ac: (rand(0..1)==0 ? true : false),
    pet_friendly: (rand(0..1)==0 ? true : false),
    smoking: (rand(0..1)==0 ? true : false),
    laundromat: (rand(0..1)==0 ? true : false),
    gym: (rand(0..1)==0 ? true : false),
    parking: (rand(0..1)==0 ? true : false),
    user: users.sample,
  )
  l
end
puts Listing.count