import { IpcRendererEvent, ipcRenderer } from 'electron';
import { QueueSong } from '/@/renderer/api/types';

const fetchRemoteLyrics = (song: QueueSong) => {
  ipcRenderer.send('lyric-fetch', song);
};

const remoteLyricsListener = (
  cb: (event: IpcRendererEvent, songName: string, source: string, lyric: string) => void,
) => {
  ipcRenderer.on('lyric-get', cb);
};

export const lyrics = {
  fetchRemoteLyrics,
  remoteLyricsListener,
};