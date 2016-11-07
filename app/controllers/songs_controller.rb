class SongsController < ApplicationController
  def index
    page = song_params[:page]
    @songs = page ? Song.page(page).per(50) : Song.all
    respond_with @songs
  end

  def create
    debugger # check params
  end

  private
  def song_params
    params.require(:song).permit(:title, :tags, :page)
  end
end
