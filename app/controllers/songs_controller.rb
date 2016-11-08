class SongsController < ApplicationController
  def index
    @page = song_params[:page]
    @songs = @page ? Song.get_page(@page) : Song.all

    if song_params[:counter]
      render json: Song.count
    elsif @songs
      render "songs/index"
    else
      render json: @songs.errors
    end
  end

  def create
    debugger # check params
  end

  private
  def song_params
    params.require(:song).permit(:title, :tags, :page, :counter)
  end
end
