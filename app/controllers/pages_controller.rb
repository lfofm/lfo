# frozen_string_literal: true

class PagesController < ApplicationController
  def index
    @current_user_key = current_user.try(:id)
  end
end
