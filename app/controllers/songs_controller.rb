class SongsController < ApplicationController
  def index
    @page, tags = song_params[:page], song_params[:tags]
    @songs = Song.get_page(@page, tags)

    if song_params[:counter]
      render json: Song.count
    elsif @songs
      render "songs/index"
    else
      render json: @songs.errors
    end
  end

  def create
    @song = Song.new(
      title: song_params[:title],
      tags_attributes: song_params[:tags]
      )
    if @song.save
      render json: @song
    else
      render json: @song.errors
    end
  end

  def update
    @song = Song.find(params[:id])
    title, tags = song_params[:title], song_params[:tags]

    begin
      @song.update_attributes(title: title, tags_attributes: tags)
    rescue => err
      render json: err
    end
    render "songs/show"
  end

  def show
    @song = Song.find_with_tags(params[:id])
    if @song
      render "songs/show"
    else
      render json: ["song not found"], status: 404
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :page, :songId, :counter, song_list: [], tags: [])
  end
end
