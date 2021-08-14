class User < ApplicationRecord
  has_many :plants, dependent: :delete_all
  has_many :plant_cares, dependent: :delete_all
end
