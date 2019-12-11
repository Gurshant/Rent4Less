class Listing < ApplicationRecord
  before_validation :set_is_active
  belongs_to :user
  # aws storage
  has_one_attached :image


  validates :street_number, :route, :locality, :administrative_area_level_1, :postal_code, :country, :bedroom, :bathroom, :sqft, :price, presence: true

  validates :bedroom, :bathroom, :sqft, :price, numericality: {greater_than: 0}
  def set_is_active 
    self.is_active ||=true#Setup Phase
  end
  
  def address
    a ="#{street_number} " + [ route, locality, administrative_area_level_1, country].compact.join(', ');
    return a;
  end


  geocoded_by :address
  after_validation :geocode, if: ->(obj){obj.address.present? && address_changed?(obj)}
  after_validation :lat_changed?

  private

  # This is used to make sure that our address is actually parsed properly and we
  # get a valuable lat/long
  def lat_changed?
    if (address_changed?(self) && !(self.latitude_changed?))
      self.errors.add(:address, "is not valid")
      return false
    end
    return true
  end

  def address_changed?(obj)
    if ( obj.street_number_changed? || obj.route_changed? || obj.locality_changed? || obj.administrative_area_level_1_changed? || obj.country_changed? || obj.postal_code_changed? )
      return true
    end
    return false
  end
  
end
