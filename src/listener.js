import autoBind from "auto-bind";

class Listener {
  constructor(playlistsService, mailSender) {
    this._playlistsService = playlistsService;
    this._mailSender = mailSender;

    autoBind(this);
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(message.content.toString());

      const songs = await this._playlistsService.getSongsOnPlaylist(playlistId);
      const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify({ playlist: songs }));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Listener;
