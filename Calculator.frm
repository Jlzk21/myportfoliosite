VERSION 5.00
Begin VB.Form Calculator 
   Caption         =   "Form1"
   ClientHeight    =   8895
   ClientLeft      =   120
   ClientTop       =   465
   ClientWidth     =   8475
   LinkTopic       =   "Form1"
   ScaleHeight     =   8895
   ScaleWidth      =   8475
   StartUpPosition =   3  'Windows Default
   Begin VB.Frame Frame1 
      Caption         =   "CALCULATOR"
      Height          =   7575
      Left            =   360
      TabIndex        =   0
      Top             =   480
      Width           =   7575
      Begin VB.CommandButton smdClr 
         Caption         =   "Clear"
         Height          =   375
         Left            =   4800
         TabIndex        =   19
         Top             =   1440
         Width           =   855
      End
      Begin VB.CommandButton cmdMod 
         Caption         =   "Mod"
         Height          =   375
         Left            =   5880
         TabIndex        =   18
         Top             =   1440
         Width           =   855
      End
      Begin VB.CommandButton cmdSquare 
         Caption         =   "SQR"
         Height          =   975
         Left            =   480
         TabIndex        =   17
         Top             =   6000
         Width           =   1095
      End
      Begin VB.CommandButton cmdDivide 
         Caption         =   "/"
         Height          =   975
         Left            =   5760
         TabIndex        =   16
         Top             =   6000
         Width           =   1095
      End
      Begin VB.CommandButton cmdMul 
         Caption         =   "X"
         Height          =   975
         Left            =   5760
         TabIndex        =   15
         Top             =   4680
         Width           =   1095
      End
      Begin VB.CommandButton cmdZero 
         Caption         =   "0"
         Height          =   975
         Left            =   2040
         TabIndex        =   14
         Top             =   6000
         Width           =   1095
      End
      Begin VB.CommandButton cmdEQUALS 
         Caption         =   "="
         Height          =   975
         Left            =   3600
         TabIndex        =   13
         Top             =   6000
         Width           =   1095
      End
      Begin VB.CommandButton cmdMinus 
         Caption         =   "-"
         Height          =   975
         Left            =   5760
         TabIndex        =   12
         Top             =   3360
         Width           =   1095
      End
      Begin VB.CommandButton cmdPlus 
         Caption         =   "+"
         Height          =   975
         Left            =   5760
         TabIndex        =   11
         Top             =   2160
         Width           =   1095
      End
      Begin VB.CommandButton cmdNine 
         Caption         =   "9"
         Height          =   975
         Left            =   3600
         TabIndex        =   10
         Top             =   4680
         Width           =   1095
      End
      Begin VB.CommandButton cmdEight 
         Caption         =   "8"
         Height          =   975
         Left            =   2040
         TabIndex        =   9
         Top             =   4680
         Width           =   1095
      End
      Begin VB.CommandButton cmdSeven 
         Caption         =   "7"
         Height          =   975
         Left            =   480
         TabIndex        =   8
         Top             =   4680
         Width           =   1095
      End
      Begin VB.CommandButton cmdSix 
         Caption         =   "6"
         Height          =   975
         Left            =   3600
         TabIndex        =   7
         Top             =   3360
         Width           =   1095
      End
      Begin VB.CommandButton cmdFive 
         Caption         =   "5"
         Height          =   975
         Left            =   2040
         TabIndex        =   6
         Top             =   3360
         Width           =   1095
      End
      Begin VB.CommandButton cmdFour 
         Caption         =   "4"
         Height          =   975
         Left            =   480
         TabIndex        =   5
         Top             =   3360
         Width           =   1095
      End
      Begin VB.CommandButton cmdThree 
         Caption         =   "3"
         Height          =   975
         Left            =   3600
         TabIndex        =   4
         Top             =   2160
         Width           =   1095
      End
      Begin VB.CommandButton cmdTwo 
         Caption         =   "2"
         Height          =   975
         Left            =   2040
         TabIndex        =   3
         Top             =   2160
         Width           =   1095
      End
      Begin VB.CommandButton cmdOne 
         Caption         =   "1"
         Height          =   975
         Left            =   480
         TabIndex        =   2
         Top             =   2160
         Width           =   1095
      End
      Begin VB.TextBox txtOUTPUT 
         Height          =   735
         Left            =   360
         TabIndex        =   1
         Top             =   480
         Width           =   6735
      End
   End
End
Attribute VB_Name = "Calculator"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim num As Integer
Dim operator As Integer
Dim result As Integer
Private Sub cmdOne_Click()
    txtOUTPUT = txtOUTPUT & 1
End Sub
Private Sub cmdTwo_Click()
    txtOUTPUT = txtOUTPUT & 2
End Sub
Private Sub cmdThree_Click()
    txtOUTPUT = txtOUTPUT & 3
End Sub
Private Sub cmdFour_Click()
    txtOUTPUT = txtOUTPUT & 4
End Sub
Private Sub cmdFive_Click()
    txtOUTPUT = txtOUTPUT & 5
End Sub
Private Sub cmdSix_Click()
    txtOUTPUT = txtOUTPUT & 6
End Sub
Private Sub cmdSeven_Click()
    txtOUTPUT = txtOUTPUT & 7
End Sub
Private Sub cmdEight_Click()
    txtOUTPUT = txtOUTPUT & 8
End Sub
Private Sub cmdNine_Click()
    txtOUTPUT = txtOUTPUT & 9
End Sub
Private Sub cmdZero_Click()
    txtOUTPUT = txtOUTPUT & 0
End Sub
Private Sub cmdPlus_Click()
    operator = 1
    num = txtOUTPUT.Text
    txtOUTPUT.Text = ""
End Sub
Private Sub cmdMinus_Click()
    operator = 2
    num = txtOUTPUT.Text
    txtOUTPUT.Text = ""
End Sub
Private Sub cmdMul_Click()
    operator = 3
    num = txtOUTPUT.Text
    txtOUTPUT.Text = ""
End Sub
Private Sub cmdDivide_Click()
    operator = 4
    num = txtOUTPUT.Text
    txtOUTPUT.Text = ""
End Sub
Private Sub cmdMod_Click()
    operator = 5
    num = txtOUTPUT.Text
    txtOUTPUT.Text = ""
End Sub
Private Sub cmdSquare_Click()
    operator = 6
    num = txtOUTPUT.Text = ""
End Sub
Private Sub cmdEQUALS_Click()
    If operator = 1 Then
        result = Val(num) + Val(txtOUTPUT.Text)
        txtOUTPUT.Text = result
    ElseIf operator = 2 Then
        result = Val(num) - Val(txtOUTPUT.Text)
        txtOUTPUT.Text = result
    ElseIf operator = 3 Then
        result = Val(num) * Val(txtOUTPUT.Text)
        txtOUTPUT.Text = result
    ElseIf operator = 4 Then
        result = Val(num) / Val(txtOUTPUT.Text)
        txtOUTPUT.Text = result
    ElseIf operator = 5 Then
        result = Val(num) Mod Val(txtOUTPUT.Text)
        txtOUTPUT.Text = result
    ElseIf operator = 6 Then
        result = Val(num) * Val(num)
        txtOUTPUT.Text = result
    End If
End Sub

Private Sub Form_Load()
    txtOUTPUT.FontSize = "22"
    txtOUTPUT.Alignment = 1
    
End Sub

Private Sub smdClr_Click()
 txtOUTPUT.Text = ""
End Sub
