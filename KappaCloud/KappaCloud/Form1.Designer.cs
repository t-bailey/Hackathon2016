﻿namespace KappaCloud
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.label1 = new System.Windows.Forms.Label();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.panel1 = new System.Windows.Forms.Panel();
            this.chatTimer = new System.Windows.Forms.Timer(this.components);
            this.chatBoxTrim = new System.Windows.Forms.RichTextBox();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(26, 25);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(46, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Channel";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(94, 18);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(277, 20);
            this.textBox1.TabIndex = 1;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(400, 16);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(107, 23);
            this.button1.TabIndex = 2;
            this.button1.Text = "Make the Cloud";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.chatBoxTrim);
            this.panel1.Location = new System.Drawing.Point(29, 67);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(478, 352);
            this.panel1.TabIndex = 3;
            // 
            // chatTimer
            // 
            this.chatTimer.Enabled = true;
            this.chatTimer.Interval = 50;
            this.chatTimer.Tick += new System.EventHandler(this.chatUpdate_Tick);
            // 
            // chatBoxTrim
            // 
            this.chatBoxTrim.Location = new System.Drawing.Point(3, 3);
            this.chatBoxTrim.Name = "chatBoxTrim";
            this.chatBoxTrim.Size = new System.Drawing.Size(472, 346);
            this.chatBoxTrim.TabIndex = 2;
            this.chatBoxTrim.Text = "";
            this.chatBoxTrim.WordWrap = false;
            this.chatBoxTrim.TextChanged += new System.EventHandler(this.chatBoxTrim_TextChanged);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(559, 474);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.panel1.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Timer chatTimer;
        private System.Windows.Forms.RichTextBox chatBoxTrim;
    }
}

