class UserSerializer < ActiveModel::Serializer
  attributes( :id,  :first_name,  :last_name,  :email, :is_admin, :created_at, :updated_at,:phone )
  has_many :listings
end