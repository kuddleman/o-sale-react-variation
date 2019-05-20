class Product < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :price, numericality: {
    greater_than_or_equal_to: 0.0
  }
  validates :quantity, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 0
  }

  belongs_to :user
  has_many :comments, dependent: :destroy

  def owned_by?(owner)
    user == owner
  end
end
