class Plant < ApplicationRecord
  belongs_to :user
  has_many :plant_cares
end
