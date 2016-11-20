using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net.Sockets;
using System.IO;

namespace KappaCloud
{
    public partial class Form1 : Form
    {
        TcpClient tcpClient;
        StreamReader reader;
        StreamWriter writer;

        string userName = "temporarily_terrible";
        string password = "oauth:q3yx09tynhaoqu744w9hm3kpree7cs";
        string channelName = "#esl_lol";
        string chatCommand = "PRIVMSG";

        public Form1()
        {
            InitializeComponent();
            Connect();
            chatTimer.Start();
        }

        private void Connect()
        {
            tcpClient = new TcpClient("irc.chat.twitch.tv", 6667);
            reader = new StreamReader(tcpClient.GetStream());
            writer = new StreamWriter(tcpClient.GetStream());

            
            writer.WriteLine("PASS " + password + Environment.NewLine
                + "NICK " + userName + Environment.NewLine
                + "USER " + userName + " 8 * : " + userName);
            writer.WriteLine("JOIN " + channelName);
            writer.Flush();

        }

        private void chatUpdate_Tick(object sender, EventArgs e)
        {
            if (!tcpClient.Connected)
            {
                Connect();
            }

            if (tcpClient.Available > 0 || reader.Peek() >= 0)
            {
                string message = reader.ReadLine();

                int msgCollon = message.IndexOf(':', 1);
                if (msgCollon > 0 && message.Contains(chatCommand))
                {
                    string trimMessage = message.Substring(msgCollon + 1);
                    chatBoxTrim.Text += $"{trimMessage}\r\n";
                }
            }
        }

        private void chatBoxTrim_TextChanged(object sender, EventArgs e)
        {
            chatBoxTrim.SelectionStart = chatBoxTrim.Text.Length;
            chatBoxTrim.ScrollToCaret();
        }
    }
}
