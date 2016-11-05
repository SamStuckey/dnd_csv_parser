class SongsController < ApplicationController
  before_action :set_song, only: [:show, :edit, :update, :destroy]

  def index
    @songs = Song.all
  end

  def create
    @song = Song.create(song_params)
    respond_with @song
  end

  private
    def song_params
      params.require(:song).permit(:title, :tags)
    end
end
