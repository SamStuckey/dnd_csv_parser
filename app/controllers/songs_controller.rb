class SongsController < ApplicationController
  def index
    page = song_params[:page]
    @songs = page ? Song.get_page(page) : Song.all
    if @songs
      render "songs/index"
    end
  end

  def create
    debugger # check params
  end

  private
  def song_params
    params.require(:song).permit(:title, :tags, :page)
  end
end
