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
        bool joined;

        string userName = "temporarily_terrible";
        string password = "oauth:q3yx09tynhaoqu744w9hm3kpree7cs";
        string channelName = "#eleaguetv";

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
            writer.Flush();
            joined = false;

        }
        private void Join()
        {
            writer.WriteLine("JOIN " + channelName);
            writer.Flush();
            joined = true;
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
                chatBox.Text += $"\r\n{message}";
            }
            else
            {
                if (!joined)
                {
                    //Join();
                    writer.WriteLine("JOIN " + channelName);
                    writer.Flush();
                    joined = true;
                }
            }
        }

    }
}
