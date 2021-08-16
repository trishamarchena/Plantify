# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Plant.destroy_all
PlantCare.destroy_all

user = User.create!( username: 'trisha1', email: 'trishamarchena@gmail.com', password_digest: 'trisha123')
pp "#{User.count} users created "

plant = Plant.create!(name: 'Monstera Deliciosa', user_id: user[:id], watering_input: 'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Pro tip: Monsteras can benefit from filtered water or water left out overnight before using. ', sunlight_input: 'Thrives in bright to medium indirect light. Not suited for intense, direct sun but can be acclimated to withstand it.', other_input: 'something special about the plant', image_url: 'https://m.media-amazon.com/images/I/712J0qb2juL._AC_SX466_.jpg')

pp "#{Plant.count} plants created"

plant_care = PlantCare.create!(user_id: user[:id], plant_id: plant[:id], date_edit: ("07/07/2021"), notes: 'This time I overwatered her a little, The tip of the leaves turned brown, make sure you measure the water next time!', date_acq: ("07/01/2021") )

pp "#{PlantCare.count} plant_care created"