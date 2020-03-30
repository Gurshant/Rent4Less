class User < ApplicationRecord
    has_secure_password
    has_many :listings, dependent: :destroy

    validates :email, presence: true, uniqueness: true,format:  /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :first_name,:last_name, presence: true
    validates :phone, presence: true, length: { is: 10 }
    
    def full_name
        "#{first_name} #{last_name}".strip
    end

end
